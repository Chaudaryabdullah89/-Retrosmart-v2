import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Grant from '../Pages/Grant';
import Eligibility from '../Pages/Eligibility';
import Retrofitevaluation from '../Pages/Retrofitevaluation';
import Retrofitdesign from '../Pages/Retrofitdesign';
import Retrofitcoordination from '../Pages/Retrofitcoordination';
import NotFound from '../components/NotFound';
import './App.css';
import Nav from '../components/nav';
import Footer from '../components/Footer';
import EcoInstallation from '../Pages/EcoInstallation';
import Externalwallinsulation from '../Pages/Externalwallinsulation';
import Internalwallinsulation from '../Pages/Internalwallinsulation';
import Loftinsulation from '../Pages/Loftinsulation';
import Smartheatingcontrols from '../Pages/Smartheatingcontrols';
import Retrofitassessment from '../Pages/Retrofitassessment';
import Aboutus from '../Pages/Aboutus';
import Grantandfunding from '../Pages/Grant';
import Preloader from '../components/Preloader';
import Blog from '../Pages/Blog';
import BlogDetail from '../Pages/Blogdetail';
import AdminDashboard from '../Pages/BlogAdmin';
import BlogCreate from '../Pages/CreateBlog';
import EditBlog from '../Pages/EditBlog';
import PasscodeVerify from '../Pages/Passcodeveriffy';
import ProtectedRoute from '../components/ProtectedRoute';
// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh AOS on route change
    AOS.refresh();
  }, [pathname]);

  return null;
};

// ScrollToTopButton component
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

const App = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grant" element={<Grant />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/retrofit-evaluation" element={<Retrofitevaluation />} />
        <Route path="/retrofit-design" element={<Retrofitdesign />} />
        <Route path="/retrofit-coordination" element={<Retrofitcoordination />} />
        <Route path="/Eco-Installation" element={<EcoInstallation />} />
        <Route path="/External-Wall-Insulation" element={<Externalwallinsulation />} />
        <Route path="/Internal-Wall-Insulation" element={<Internalwallinsulation />} />
        <Route path="/Loft-Insulation" element={<Loftinsulation />} />
        <Route path="/Smart-Heating-Controls" element={<Smartheatingcontrols />} />
        <Route path="/Retrofit-Assessment" element={<Retrofitassessment />} />
        <Route path="/About-Us" element={<Aboutus />} />
        <Route path="/Grant-And-Funding" element={<Grantandfunding />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/blog" element={
            <ProtectedRoute>
              <AdminDashboard/>
            </ProtectedRoute>
          } />
          <Route path="/admin/createblog" element={
            <ProtectedRoute>
              <BlogCreate />
            </ProtectedRoute>
          } />
          <Route path="/admin/edit/:id" element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          } />
          <Route path="/admin/verification" element={<PasscodeVerify/>} />


        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default App;
