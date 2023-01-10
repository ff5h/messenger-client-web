import React from "react";
import { ErrorPage } from "../../pages/ErrorPage";
import { LoginPage } from "../../pages/LoginPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <ErrorPage />
    </div>
  );
};

export { App };
