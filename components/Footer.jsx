import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/retro smart logo.jpg'

const Footer = () => {
  return (
    <footer 
      className="relative border-t border-gray-300 mt-10 overflow-hidden" 
      style={{ 
        borderRadius: '51px 51px 0 0',
        backgroundImage: 'url("https://retrosmart.co.uk/images/footerbg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="container mx-auto p-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <img src={logo} alt="Company Logo" className="h-20" />
            <p className="text-gray-300">Company Number: 15803638</p>
            <p className="text-gray-400">Retro Smart - a Retrofit Consultancy</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Visit More</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Contact</Link></li>
              <li><Link to="/eco4-grant" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Eco4 Grant</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/external-wall-insulation" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">External Wall Insulation</Link></li>
              <li><Link to="/internal-wall-insulation" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Internal Wall Insulation</Link></li>
              <li><Link to="/loft-insulation" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Loft Insulation</Link></li>
              <li><Link to="/smart-heating-controls" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Smart Heating Controls</Link></li>
              <li><Link to="/retrofit-assessment" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Retrofit Assessment</Link></li>
              <li><Link to="/retrofit-coordination" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Retrofit Coordination</Link></li>
              <li><Link to="/retrofit-design" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Retrofit Design</Link></li>
              <li><Link to="/retrofit-evaluation" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Retrofit Evaluation</Link></li>
            </ul>
          </div>

          {/* Additional Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Additional Information</h4>
            <ul className="space-y-2">
              <li><Link to="/eco4-grant" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">What Is Eco4 Grant</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">What We Provide</Link></li>
              <li><Link to="/Grant-And-Funding" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Make the Enquiry</Link></li>
              <li><Link to="/eligibility" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">Check your Eligibility</Link></li>
              <li><a href="https://trustpilot.com/review/retrosmart.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">View Trustpilot</a></li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-300 mr-2">Email:</span>
                <a href="mailto:info@retrosmart.co.uk" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">info@retrosmart.co.uk</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300 mr-2">Phone:</span>
                <a href="tel:03337335010" className="text-gray-300 hover:text-amber-600 transition-colors duration-300">0333 733 5010</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Connect with Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-600 transition-colors duration-300 text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 RetroSmart Limited. All rights reserved.</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
