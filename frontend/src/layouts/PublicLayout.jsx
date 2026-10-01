import React from "react";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";
import { AuthModal } from "../components/auth/AuthModal";
import { Toast } from "../components/common/Toast";

export const PublicLayout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "var(--bg-paper)" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <AuthModal />
      <Toast />
    </div>
  );
};
