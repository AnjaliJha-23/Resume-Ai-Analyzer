import React from "react";
import { PublicLayout } from "../../layouts/PublicLayout";
import { Hero } from "../../components/landing/Hero";
import { Features } from "../../components/landing/Features";
import { HowItWorks } from "../../components/landing/HowItWorks";
import { ResumeAnalysisPreview } from "../../components/landing/ResumeAnalysisPreview";
import { ResumeBuilderShowcase } from "../../components/landing/ResumeBuilderShowcase";
import { TemplatePreview } from "../../components/landing/TemplatePreview";
import { CTA } from "../../components/landing/CTA";

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
