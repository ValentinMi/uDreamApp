import React, { useState } from "react";
import { useAsyncStorage } from "./hooks/useAsyncStorage";
import { USER_ASYNC_STORAGE_KEY } from "./constants/users.constants";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {}
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { removeStoredData } = useAsyncStorage(USER_ASYNC_STORAGE_KEY);
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "Bob" };
          setUser(fakeUser);
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
