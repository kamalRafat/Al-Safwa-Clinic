import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { LanguageProvider } from "./context/LanguageProvider";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  );
}

export default App;
