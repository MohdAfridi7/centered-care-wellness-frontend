import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import { AnimatePresence } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import AdminBlogs from './dashboardSection/blogTab/AdminBlogs';
import ViewContact from './dashboardSection/contactTab/ViewContact';
import CommingSoon from "./ComingSoon"
import SeoMain from './dashboardSection/seoTab/SeoMain';
import ChangeEmail from './dashboardSection/changeEmailTab/ChnageEmail';

function Dashboard() {
const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

if (!token || !user || user.role !== "admin") {
  return <Navigate to="/login" replace />;
}

const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(() => {
    // Retrieve active content from sessionStorage or default to 'Home'
    return sessionStorage.getItem('activeContent') || 'Overview';
  });

  useEffect(() => {
    // Save active content to sessionStorage whenever it changes
    sessionStorage.setItem('activeContent', activeContent);
  }, [activeContent]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  sessionStorage.clear();

  setIsMobileMenuOpen(false);

  navigate("/", { replace: true });
};

  const handleMenuClick = (label) => {
    setActiveContent(label);
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  // Render content based on activeContent
  const renderContent = () => {
    switch (activeContent) {
      case 'Overview':
        return <CommingSoon/>;
      case 'Blogs':
        return <AdminBlogs/>;
      case 'Contacts Data':
        return <ViewContact/>;
      case 'Seo Manage':
        return <SeoMain/>;
        case 'Change Email':
        return <ChangeEmail/>;
      default:
        return <CommingSoon/>; // Fallback to Home
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar
          onMenuClick={handleMenuClick}
          onLogout={handleLogout}
          activeContent={activeContent}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>

      {/* Mobile Hamburger */}
      {!isMobileMenuOpen &&
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 bg-[#fd0225] text-white rounded-md shadow-lg hover:bg-[#fd0225]/90 transition"
        >
          <FiMenu size={24} />
        </button>
      </div>
}
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileSidebar
            onMenuClick={handleMenuClick}
            onLogout={handleLogout}
            activeContent={activeContent}
            closeMenu={toggleMobileMenu}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dashboard;