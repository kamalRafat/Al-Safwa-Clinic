import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./context/LanguageProvider";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
