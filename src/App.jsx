import React from "react";
import { Routes, Route } from "react-router-dom";
import { ArrowUp } from "lucide-react";

// Layout
import Layout from "./Layout";

// Pages
import Home from "./pages/homePage/HomePage";
import About from "./pages/aboutPage/AboutPage";
import Services from "./pages/servicePage/ServicePage";
import Contact from "./pages/contactPage/ContactPage";
import Login from "./pages/authPage/Login";
import ForgotPassword from "./pages/authPage/ForgotPassword";
import Dashboard from "./adminCompotents/dashboard/Dashboard";
import BlogPage from "./pages/blogPage/BlogPage";
import BlogDetails from "./pages/blogPage/BlogDetails";
import PartnersPage from "./pages/partnerPage/PartnersPage";
import HowWeCanHelp from "./pages/serviceDetaiPage/HowWeCanHelp";
import WhoWeServe from "./pages/serviceDetaiPage/WhoWeServe";
import ConciergeMedicine from "./pages/serviceDetaiPage/ConciergeMedicine";
import PrimaryCareService from "./pages/serviceDetaiPage/PrimaryCareService";
import ChronicCareManagementConditions from "./pages/serviceDetaiPage/ChronicCareManagementConditions";
import TransitionalCareManagementRequirements from "./pages/serviceDetaiPage/TransitionalCareManagementRequirements";
import BehavioralHealthCare from "./pages/serviceDetaiPage/BehavioralHealthCare";
import ScrollHandler from "./components/common/ScrollHandler";

function App() {
  return (
    <>
    <ScrollHandler/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/blogs/:id" element={<BlogDetails/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<PartnersPage/>} />

        {/* service detail page routes----------- */}
        <Route path="/how-we-can-help" element={<HowWeCanHelp/>} />
        <Route path="/who-we-serve" element={<WhoWeServe/>} />
        <Route path="/concierge-medicine" element={<ConciergeMedicine/>} />
        <Route path="/primary-care" element={<PrimaryCareService/>} />
        <Route path="/chronic-care-management-conditions" element={<ChronicCareManagementConditions/>} />
        <Route path="/transitional-care-management-requirements" element={<TransitionalCareManagementRequirements/>} />
        <Route path="/behavioral-health-care" element={<BehavioralHealthCare/>} />

<Route path="/login" element={<Login />} />
{/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
<Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Route>
    </Routes>
 
    </>
  );
}

export default App;