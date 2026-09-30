import React from "react";
import { ThemeProvider } from "./frontend/context/ThemeContext";
import { AppProvider, useApp } from "./frontend/context/AppContext";

import Landing from "./frontend/pages/Landing/Landing";
import Dashboard from "./frontend/pages/Dashboard/Dashboard";
import ResumeBuilder from "./frontend/pages/ResumeBuilder/ResumeBuilder";
import ResumeAnalysis from "./frontend/pages/ResumeAnalysis/ResumeAnalysis";
import Templates from "./frontend/pages/Templates/Templates";
import Profile from "./frontend/pages/Profile/Profile";
import NotFound from "./frontend/pages/NotFound/NotFound";

function AppContent() {
  const { currentView } = useApp();

  switch (currentView) {
    case "landing":
      return <Landing />;
    case "dashboard":
      return <Dashboard />;
    case "builder":
      return <ResumeBuilder />;
    case "analysis":
      return <ResumeAnalysis />;
    case "templates":
      return <Templates />;
    case "profile":
      return <Profile />;
    default:
      return <NotFound />;
  }
}

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;