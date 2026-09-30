import React from "react";
import { PublicLayout } from "../../layouts/PublicLayout";
import { Button } from "../../components/common/Button";
import { useApp } from "../../context/AppContext";

export const NotFound = () => {
  const { navigateTo } = useApp();

  return (
    <PublicLayout>
      <div className="container" style={{ textAlign: "center", padding: "120px 0" }}>
        <span className="editorial-number" style={{ fontSize: "6rem" }}>404</span>
        <h1 className="h1" style={{ marginBottom: "16px" }}>PAGE NOT FOUND</h1>
        <p className="body-text" style={{ maxWidth: "480px", margin: "0 auto 32px auto" }}>
          The editorial page or document you are looking for does not exist or has been moved.
        </p>
        <Button variant="primary" className="btn-square" onClick={() => navigateTo("landing")}>
          RETURN TO OVERVIEW
        </Button>
      </div>
    </PublicLayout>
  );
};

export default NotFound;
