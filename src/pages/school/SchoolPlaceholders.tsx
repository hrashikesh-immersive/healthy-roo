import React from "react";
import SchoolLayout from "@/components/school/SchoolLayout";

const PlaceholderPage = ({ title }: { title: string }) => (
  <SchoolLayout>
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">This page is coming soon.</p>
    </div>
  </SchoolLayout>
);

export const SchoolStudents = () => <PlaceholderPage title="Students Management" />;
export const SchoolAssessments = () => <PlaceholderPage title="Assessments" />;
export const SchoolReports = () => <PlaceholderPage title="Reports" />;
export const SchoolSettings = () => <PlaceholderPage title="School Settings" />;
