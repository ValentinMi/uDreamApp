import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useAsyncStorage } from "./hooks/useAsyncStorage";
import { USER_ASYNC_STORAGE_KEY } from "./constants/users.constants";
import { authUser } from "./api/auth.api";
import { Credentials } from "./types/AuthParamList";

type User = null | { username: string; _id: string };

export const AuthContext = React.createContext<{
  user: User;
  login: (credentials?: Credentials) => void;
  logout: () => void;
  loginWithJwt: (jwt: string) => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
  loginWithJwt: () => {}
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { setStoredData, removeStoredData } = useAsyncStorage(
    USER_ASYNC_STORAGE_KEY
  );
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (credentials: Credentials) => {
          try {
            const userAuthToken = await authUser(credentials);
            if (userAuthToken) {
              setStoredData(userAuthToken);
              axios.defaults.headers.common = {
                "uDream-auth-token": userAuthToken
              };
              const decoded = jwtDecode(userAuthToken);
              setUser(decoded);
            }
          } catch (error) {
            return error;
          }
        },
        loginWithJwt: jwt => {
          axios.defaults.headers.common = { "uDream-auth-token": jwt };
          const decoded = jwtDecode(jwt);
          setUser(decoded);
        },
        logout: async () => {
          await removeStoredData();
          setUser(null);
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
