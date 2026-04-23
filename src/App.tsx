import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ImpactPage from "./pages/Impact";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SchoolLoginPage from "./pages/SchoolLogin";
import SchoolSignupPage from "./pages/SchoolSignup";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CareersPage from "./pages/Careers";
import ServicesPage from "./pages/Services";
import BlogPage from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SuperadminLoginPage from "./pages/superadmin/SuperadminLogin";
import SuperadminDashboard from "./pages/superadmin/SuperadminDashboard";
import SchoolsPage from "./pages/superadmin/Schools";
import DoctorsPage from "./pages/superadmin/Doctors";
import VisitsPage from "./pages/superadmin/Visits";
import StudentsPage from "./pages/superadmin/Students";
import ReportsPage from "./pages/superadmin/Reports";
import AnalyticsPage from "./pages/superadmin/Analytics";
import ClassesPage from "./pages/superadmin/Classes";
import SchoolDashboard from "./pages/school/SchoolDashboard";
import { SchoolStudents, SchoolAssessments, SchoolReports, SchoolSettings } from "./pages/school/SchoolPlaceholders";

import DoctorLoginPage from "./pages/doctor/DoctorLogin";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import StudentList from "./pages/doctor/StudentList";
import StudentTestDetails from "./pages/doctor/StudentTestDetails";

import { ContactPopupProvider } from "./context/ContactPopupContext";
import ContactPopup from "./components/ContactPopup";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactPopupProvider>
        <Toaster />
        <Sonner />
        <ContactPopup />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* SCHOOL ROUTES */}
            <Route path="/school-login" element={<SchoolLoginPage />} />
            <Route path="/school-signup" element={<SchoolSignupPage />} />
            <Route path="/school/dashboard" element={<SchoolDashboard />} />
            <Route path="/school/students" element={<SchoolStudents />} />
            <Route path="/school/assessments" element={<SchoolAssessments />} />
            <Route path="/school/reports" element={<SchoolReports />} />
            <Route path="/school/settings" element={<SchoolSettings />} />

            {/* DOCTOR ROUTES */}
            <Route path="/doctor/login" element={<DoctorLoginPage />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/students/:schoolId/:testId" element={<StudentList />} />
            <Route path="/doctor/students/:schoolId/:testId/:studentId" element={<StudentTestDetails />} />

            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* SUPERADMIN ROUTES */}
            <Route path="/superadmin/login" element={<SuperadminLoginPage />} />
            <Route path="/superadmin" element={<SuperadminDashboard />} />
            <Route path="/superadmin/schools" element={<SchoolsPage />} />
            <Route path="/superadmin/doctors" element={<DoctorsPage />} />
            <Route path="/superadmin/classes" element={<ClassesPage />} />
            <Route path="/superadmin/visits" element={<VisitsPage />} />
            <Route path="/superadmin/students" element={<StudentsPage />} />
            <Route path="/superadmin/reports" element={<ReportsPage />} />
            <Route path="/superadmin/analytics" element={<AnalyticsPage />} />
            <Route path="/superadmin/settings" element={<SuperadminDashboard />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContactPopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
