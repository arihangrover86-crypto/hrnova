import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer";

// Pages
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Products
import CoreHR from "@/pages/products/core-hr";
import PayrollCompliance from "@/pages/products/payroll-compliance";
import PerformanceManagement from "@/pages/products/performance-management";
import Timesheet from "@/pages/products/timesheet";
import CloudPayMobile from "@/pages/products/cloudpay-mobile";
import LeaveAttendance from "@/pages/products/leave-attendance";
import ExpenseTravel from "@/pages/products/expense-travel";
import FieldforceManagement from "@/pages/products/fieldforce-management";
import ComplianceManagement from "@/pages/products/compliance-management";

// Services
import ServiceOffering from "@/pages/services/offering";
import VirtualHRTeam from "@/pages/services/virtual-hr-team";
import PolicyAuditDesign from "@/pages/services/policy-audit-design";

// Business Size
import Startup from "@/pages/business-size/startup";
import GrowingStartup from "@/pages/business-size/growing-startup";
import SmallBusiness from "@/pages/business-size/small-business";

// Resources
import HRToolkit from "@/pages/resources/toolkit";
import Blogs from "@/pages/resources/blogs";

// About
import AboutUs from "@/pages/about/about-us";
import OurStory from "@/pages/about/our-story";
import MediaCoverage from "@/pages/about/media-coverage";
import CaseStudies from "@/pages/about/case-studies";
import Careers from "@/pages/about/careers";
import Support from "@/pages/about/support";

// Auth
import RequestDemo from "@/pages/auth/request-demo";
import Login from "@/pages/auth/login";
import AdminLogin from "@/pages/auth/admin-login";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Products */}
      <Route path="/products/core-hr" component={CoreHR} />
      <Route path="/products/payroll-compliance" component={PayrollCompliance} />
      <Route path="/products/performance-management" component={PerformanceManagement} />
      <Route path="/products/timesheet" component={Timesheet} />
      <Route path="/products/cloudpay-mobile" component={CloudPayMobile} />
      <Route path="/products/leave-attendance" component={LeaveAttendance} />
      <Route path="/products/expense-travel" component={ExpenseTravel} />
      <Route path="/products/fieldforce-management" component={FieldforceManagement} />
      <Route path="/products/compliance-management" component={ComplianceManagement} />

      {/* Services */}
      <Route path="/services/offering" component={ServiceOffering} />
      <Route path="/services/virtual-hr-team" component={VirtualHRTeam} />
      <Route path="/services/policy-audit-design" component={PolicyAuditDesign} />

      {/* Business Size */}
      <Route path="/business-size/startup" component={Startup} />
      <Route path="/business-size/growing-startup" component={GrowingStartup} />
      <Route path="/business-size/small-business" component={SmallBusiness} />

      {/* Resources */}
      <Route path="/resources/toolkit" component={HRToolkit} />
      <Route path="/resources/blogs" component={Blogs} />

      {/* About */}
      <Route path="/about/about-us" component={AboutUs} />
      <Route path="/about/our-story" component={OurStory} />
      <Route path="/about/media-coverage" component={MediaCoverage} />
      <Route path="/about/case-studies" component={CaseStudies} />
      <Route path="/about/careers" component={Careers} />
      <Route path="/about/support" component={Support} />

      {/* Auth */}
      <Route path="/request-demo" component={RequestDemo} />
      <Route path="/login" component={Login} />
      <Route path="/admin-login" component={AdminLogin} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
