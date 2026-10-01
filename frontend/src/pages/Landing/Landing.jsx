import React from "react";
import { PublicLayout } from "../../layouts/PublicLayout";
import { Hero } from "../../features/landing/components/Hero";
import { Features } from "../../features/landing/components/Features";
import { HowItWorks } from "../../features/landing/components/HowItWorks";
import { ResumeAnalysisPreview } from "../../features/landing/components/ResumeAnalysisPreview";
import { ResumeBuilderShowcase } from "../../features/landing/components/ResumeBuilderShowcase";
import { TemplatePreview } from "../../features/landing/components/TemplatePreview";
import { CTA } from "../../features/landing/components/CTA";

export const Landing = () => {
  return (
    <PublicLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <ResumeAnalysisPreview />
      <ResumeBuilderShowcase />
      <TemplatePreview />
      <CTA />
    </PublicLayout>
  );
};

export default Landing;
