import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Grant from './Pages/Grant';
import Eligibility from './Pages/Eligibility';
import Retrofitevaluation from './Pages/Retrofitevaluation';
import Retrofitdesign from './Pages/Retrofitdesign';
import Retrofitcoordination from './Pages/Retrofitcoordination';
import NotFound from './components/NotFound';
import './App.css'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import EcoInstallation from '../Pages/EcoInstallation'
import Externalwallinsulation from '../Pages/Externalwallinsulation'
import Internalwallinsulation from '../Pages/Internalwallinsulation'
import Loftinsulation from '../Pages/Loftinsulation'
import Smartheatingcontrols from '../Pages/Smartheatingcontrols'
import Retrofitassessment from '../Pages/Retrofitassessment'
import Aboutus from '../Pages/Aboutus'

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grant" element={<Grant />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/retrofitevaluation" element={<Retrofitevaluation />} />
        <Route path="/retrofitdesign" element={<Retrofitdesign />} />
        <Route path="/retrofitcoordination" element={<Retrofitcoordination />} />
        <Route path="/Eco-Installation" element={<EcoInstallation />} />
        <Route path="/External-Wall-Insulation" element={<Externalwallinsulation />} />
        <Route path="/Internal-Wall-Insulation" element={<Internalwallinsulation />} />
        <Route path="/Loft-Insulation" element={<Loftinsulation />} />
        <Route path="/Smart-Heating-Controls" element={<Smartheatingcontrols />} />
        <Route path="/Retrofit-Assessment" element={<Retrofitassessment />} />
        <Route path="/About-Us" element={<Aboutus />} />
        {/* Catch all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
