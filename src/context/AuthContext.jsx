import {createContext, useEffect, useMemo, useReducer} from "react";
import {authService} from "@/services/authService.js";

export const AuthContext = createContext();

// Define the possible actions for the authReducer
const ACTIONS = {
  setAuthenticated: 'setAuthenticated',
  clearAuthenticated: 'clearAuthenticated',
};

// Reducer function to handle authentication state changes
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setAuthenticated:
      return { ...state, isAuthenticated: action.payload };
    case ACTIONS.clearAuthenticated:
      return { ...state, isAuthenticated: false };
    default:
      console.error(`You passed an action.type: ${action.type} which doesn't exist`);
      return state;
  }
};

// Initial state for the authentication context
const initialData = {
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  // Use reducer to manage the authentication state
  const [state, dispatch] = useReducer(authReducer, initialData);

  const checkAuth = async () => {
    try {
      const data = await authService.verifyToken();
      dispatch({ type: ACTIONS.setAuthenticated, payload: data.isAuthenticated });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const clearAuthenticated = async () => {
    try {
      await authService.logoutUser()
      dispatch({ type: ACTIONS.clearAuthenticated });
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  useEffect(() => {
    checkAuth(); // Check authentication state when the component mounts
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      checkAuth,
      clearAuthenticated,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
