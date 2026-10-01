import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider, useApp } from "./context/AppContext";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import ResumeAnalysis from "./pages/ResumeAnalysis/ResumeAnalysis";
import Templates from "./pages/Templates/Templates";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

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