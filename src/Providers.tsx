import React from "react";
import AuthProvider from "./AuthProvider";
import LoadingProvider from "./LoadingProvider";
import Routes from "./Routes";

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </LoadingProvider>
  );
};

export default Providers;
