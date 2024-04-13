import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fakeAuthentication = {
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
    isAuthenticated: isAuthenticated
  };

  return (
    <AuthContext.Provider value={fakeAuthentication}>
      {props.children}
    </AuthContext.Provider>
  );
};