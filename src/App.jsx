import React from "react";
import { LanguageProvider } from "./context/LanguageProvider";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;
