import React from "react";
import { ErrorPage } from "../../pages/ErrorPage";
import { LoginPage } from "../../pages/LoginPage";
import { RegistrationPage } from "../../pages/RegistrationPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <RegistrationPage />
    </div>
  );
};

export { App };
