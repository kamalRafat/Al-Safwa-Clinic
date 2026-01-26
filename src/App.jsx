import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
