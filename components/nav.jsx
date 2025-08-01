import React, { useState } from 'react'
import logo from '../src/assets/retro smart logo.jpg'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className=' mx-auto'>
            <div className='z-50  fixed absoulute top-0 w-full  border-b border-gray-100 bg-white/80 backdrop-filter backdrop-blur-md'>
                <div className='flex max-w-7xl mx-auto flex-row justify-between gap-10 items-center px-2 md:px-4 py-2'>
                    <div className=''>
                        <Link to='/'>
                            <img 
                                src={logo} 
                                alt="logo" 
                                className='w-60 h-auto object-contain hover:scale-105 transition-transform duration-200'
                            />
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className='hidden md:block'>
                        <ul className='flex flex-row items-center gap-8 text-base font-medium'>
                            <li><Link to='/' className='text-gray-700 hover:text-green-600 transition-colors duration-200'>Home</Link></li>
                            <li className="relative group">
                                <Link to='/Eco-Installation' className="text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center">
                                    Eco Installation
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                <ul className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <li>
                                        <Link to="/external-wall-insulation" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            External Wall Insulation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/internal-wall-insulation" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Internal Wall Insulation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/loft-insulation" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Loft Insulation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/smart-heating-controls" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Smart Heating Controls
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to='/About-Us' className='text-gray-700 hover:text-green-600 transition-colors duration-200'>About Us</Link></li>
                            <li><Link to='/blog' className='text-gray-700 hover:text-green-600 transition-colors duration-200'>Blogs</Link></li>
                            <li><Link to='/admin/blog' className='text-gray-700 hover:text-green-600 transition-colors duration-200'>admin</Link></li>
                           
                           
                            <li className="relative group">
                                <Link to='/Services' className="text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center">
                                    Services
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                              
                                <ul className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <li>
                                        <Link to="/retrofit-assessment" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Retrofit Assessment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Retrofit-coordination" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Retrofit Coordination
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/retrofit-design" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Retrofit Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/retrofit-evaluation" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                                            Retrofit Evaluation
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link to='/Grant-And-Funding' className='text-gray-700 hover:text-green-600 transition-colors duration-200'>Grants And Funding</Link></li>
                            <li>
                                <Link 
                                    to='/contact' 
                                    className='bg-green-600 text-white px-6 py-3 hidden lg:block rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out hover:shadow-lg'
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button 
                            className='p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none'
                            aria-label="Toggle menu"
                            onClick={toggleMenu}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown - Hidden by default */}
                {isOpen && (
                    <div className='fixed top-0 left-0 right-0 w-full h-screen bg-white/95 backdrop-filter backdrop-blur-lg z-50 overflow-y-auto'>
                        <div className='container mx-auto px-6 py-8'>
                            <div className='flex justify-end mb-6'>
                                <button
                                    onClick={toggleMenu}
                                    className='p-2 rounded-full bg-green-50 hover:bg-green-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                                    aria-label="Close menu"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className='py-8'>
                                <ul className='flex flex-col space-y-6 text-lg font-medium'>
                                    <li className='border-b border-gray-100 pb-4'>
                                        <Link to='/' className='block py-2 px-4 hover:bg-green-50 rounded-lg text-gray-800 hover:text-green-600 transition-all duration-300'>
                                            <span className='flex items-center'>
                                                <span className='mr-3 text-green-500'>•</span>
                                                Home
                                            </span>
                                            <hr />
                                        </Link>
                                    </li>
                                    <li className='border-b border-gray-100 pb-4'>
                                        <Link to='/Eco-Installation' className='block py-2 px-4 hover:bg-green-50 rounded-lg text-gray-800 hover:text-green-600 transition-all duration-300'>
                                            <span className='flex items-center'>
                                                <span className='mr-3 text-green-500'>•</span>
                                                Eco Installation
                                            </span>
                                            <hr  />
                                        </Link>
                                    </li>
                                    <li className='border-b border-gray-100 pb-4'>
                                        <Link to='/About-Us' className='block py-2 px-4 hover:bg-green-50 rounded-lg text-gray-800 hover:text-green-600 transition-all duration-300'>
                                            <span className='flex items-center'>
                                                <span className='mr-3 text-green-500'>•</span>
                                                About Us
                                            </span>
                                            <hr />
                                        </Link>
                                    </li>
                                    <li className='border-b border-gray-100 pb-4'>
                                        <Link to='/Services' className='block py-2 px-4 hover:bg-green-50 rounded-lg text-gray-800 hover:text-green-600 transition-all duration-300'>
                                            <span className='flex items-center'>
                                                <span className='mr-3 text-green-500'>•</span>
                                                Services
                                            </span>
                                            <hr />
                                        </Link>
                                    </li>
                                    <li className='border-b border-gray-100 pb-4'>
                                        <Link to='/Grants-And-Funding' className='block py-2 px-4 hover:bg-green-50 rounded-lg text-gray-800 hover:text-green-600 transition-all duration-300'>
                                            <span className='flex items-center'>
                                                <span className='mr-3 text-green-500'>•</span>
                                                Grants And Funding
                                            </span>
                                            <hr />
                                        </Link>
                                    </li>
                                </ul>
                                
                                <div className='mt-10 flex justify-center'>
                                    <Link 
                                        to='/contact' 
                                        className='inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 font-semibold'
                                    >
                                        <span className='mr-2'>Contact Us</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav
