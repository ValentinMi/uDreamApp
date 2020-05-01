import React, { useState } from "react";

export const LoadingContext = React.createContext<{
  isLoading: true | false;
  setIsLoading: React.Dispatch<React.SetStateAction<true | false>>;
}>({
  isLoading: false,
  setIsLoading: () => {},
});

interface LoadingProviderProps {}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<true | false>(false);
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading: (bool) => setIsLoading(bool),
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
