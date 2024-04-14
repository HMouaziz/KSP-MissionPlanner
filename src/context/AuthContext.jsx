import axios from "axios";
import { createContext, useMemo, useReducer } from "react";

export const AuthContext = createContext();

// Define the possible actions for the authReducer
const ACTIONS = {
  setToken: "setToken",
  clearToken: "clearToken",
};

// Reducer function to handle authentication state changes
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setToken:
      // Set the authentication token in axios headers and local storage
      axios.defaults.headers.common["Authorization"] = "Bearer " + action.payload;
      localStorage.setItem("token", action.payload);

      // Update the state with the new token
      return { ...state, token: action.payload };

    case ACTIONS.clearToken:
      // Clear the authentication token from axios headers and local storage
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");

      // Update the state by removing the token
      return { ...state, token: null };

    default:
      console.error(
        `You passed an action.type: ${action.type} which doesn't exist`
      );
      return state
  }
};

// Initial state for the authentication context
const initialData = {
  token: localStorage.getItem("token") || null,
};


const AuthProvider = ({ children }) => {
  // Use reducer to manage the authentication state
  const [state, dispatch] = useReducer(authReducer, initialData);

  const setToken = (newToken) => {
    // Dispatch the setToken action to update the state
    dispatch({ type: ACTIONS.setToken, payload: newToken });
  };

  const clearToken = () => {
    // Dispatch the clearToken action to update the state
    dispatch({ type: ACTIONS.clearToken });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      setToken,
      clearToken,
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
