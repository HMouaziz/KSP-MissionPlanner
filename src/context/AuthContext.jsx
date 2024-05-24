import { createContext, useEffect, useMemo, useReducer } from "react";
import { authService } from "@/services/authService.js";
import {
  encryptData,
  generateHMAC,
  hashPassword,
} from "@/utils/authentication.js";

export const AuthContext = createContext();

const ACTIONS = {
  setAuthenticated: "setAuthenticated",
  clearAuthenticated: "clearAuthenticated",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setAuthenticated:
      return { ...state, isAuthenticated: action.payload };
    case ACTIONS.clearAuthenticated:
      return { ...state, isAuthenticated: false };
    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`,
      );
      return state;
  }
};

const initialData = {
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialData);

  const checkAuth = async () => {
    try {
      const data = await authService.verifyToken();
      dispatch({
        type: ACTIONS.setAuthenticated,
        payload: data.isAuthenticated,
      });
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const clearAuthenticated = async () => {
    dispatch({ type: ACTIONS.clearAuthenticated });
  };

  const registerUser = async (formData) => {
    const { email, password } = formData;

    const hashedPassword = hashPassword(password);

    const userData = { email, password: hashedPassword };

    const encryptedData = await encryptData(JSON.stringify(userData));

    const { requestId, secretKey } = await authService.getSecretKey();
    const hmac = generateHMAC(encryptedData, secretKey);

    await authService.registerUser(encryptedData, hmac, requestId);
  };

  const loginUser = async (formData) => {
    const { email, password } = formData;

    const hashedPassword = hashPassword(password);

    const userData = { email, password: hashedPassword };

    const encryptedData = await encryptData(JSON.stringify(userData));

    const { requestId, secretKey } = await authService.getSecretKey();
    const hmac = generateHMAC(encryptedData, secretKey);

    await authService.loginUser(encryptedData, hmac, requestId);
  };

  const logoutUser = async () => {
    try {
      await authService.logoutUser();
      await clearAuthenticated();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      checkAuth,
      registerUser,
      loginUser,
      logoutUser,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
