import React from "react";
import AuthProvider from "./AuthProvider";
import Routes from "./Routes";

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
