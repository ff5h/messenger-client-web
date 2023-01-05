import React from "react";
import { Button } from "./components/common";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <RegistrationPage />
      {/* <Button>test</Button> */}
    </div>
  );
}

export default App;
