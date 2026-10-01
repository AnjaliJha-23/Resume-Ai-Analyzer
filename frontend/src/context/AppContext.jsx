import { createContext, useContext, useState } from "react";
import { INITIAL_RESUME_DATA, MOCK_RESUMES_LIST } from "../features/resume-builder/data/resumeData";
import { MOCK_USER_PROFILE } from "../features/profile/data/userData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("landing"); // 'landing' | 'dashboard' | 'builder' | 'analysis' | 'templates' | 'profile'
  const [resumesList, setResumesList] = useState(MOCK_RESUMES_LIST);
  const [activeResume, setActiveResume] = useState(INITIAL_RESUME_DATA);
  const [activeTemplate, setActiveTemplate] = useState("editorial-modern");
  const [user, setUser] = useState(MOCK_USER_PROFILE);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // 'login' | 'signup'
  const [toastMessage, setToastMessage] = useState(null);

  const navigateTo = (view, extraData = null) => {
    if (extraData?.resume) {
      setActiveResume(extraData.resume);
    }
    if (extraData?.templateId) {
      setActiveTemplate(extraData.templateId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuth = () => {
    setIsAuthModalOpen(false);
  };

  const updateResumeField = (section, field, value) => {
    setActiveResume((prev) => {
      if (section === "personalInfo") {
        return {
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            [field]: value
          }
        };
      }
      return {
        ...prev,
        [section]: value
      };
    });
  };

  const updateExperienceItem = (index, field, value) => {
    setActiveResume((prev) => {
      const updatedExp = [...prev.experience];
      updatedExp[index] = { ...updatedExp[index], [field]: value };
      return { ...prev, experience: updatedExp };
    });
  };

  const addExperienceItem = () => {
    setActiveResume((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: `exp-${Date.now()}`,
          company: "New Company",
          position: "Role / Title",
          location: "Location",
          startDate: "2025",
          endDate: "Present",
          current: true,
          description: "Key responsibilities and achievements..."
        }
      ]
    }));
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        navigateTo,
        resumesList,
        setResumesList,
        activeResume,
        setActiveResume,
        updateResumeField,
        updateExperienceItem,
        addExperienceItem,
        activeTemplate,
        setActiveTemplate,
        user,
        setUser,
        isAuthModalOpen,
        authMode,
        openAuth,
        closeAuth,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
