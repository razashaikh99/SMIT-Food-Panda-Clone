import React, { useState } from 'react';
import Logo from '../../../assets/logo/logo.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Main Navbar */}
            <nav className="sticky top-0 bg-white shadow-sm z-50">
                <div className="h-16 px-4 lg:px-8 max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={Logo} alt="foodpanda" className="h-8" />
                    </div>

                    <div className="h-full flex justify-between items-center gap-8">
                        {/* Desktop Navigation - Hidden on mobile */}
                        <div className="hidden lg:flex justify-center items-center gap-6 font-bold text-gray-800">
                            <Link to="/" className='hover:text-primary transition-colors'>Home
                            </Link>
                            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                            <Link to="/newsroom" className="hover:text-primary transition-colors">Newsroom</Link>
                            <Link to="/partners" className="hover:text-primary transition-colors">Partners</Link>
                            <Link to="/panda-ads" className="hover:text-primary transition-colors">Panda ads</Link>
                            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-2">

                            {/* Location Button - Hidden on mobile */}
                            <button className="hidden lg:block px-4 py-3 bg-primary rounded-full text-white text-sm font-bold hover:bg-btn-hover transition-colors cursor-pointer">
                                Choose Location
                            </button>

                            {/* Search Icon */}
                            <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                                <img src={SearchIcon} alt="Search" className="w-5 h-5" />
                            </button>

                            {/* Hamburger Menu for Mobile */}
                            <button
                                className="lg:hidden text-gray-700"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t shadow-lg">
                        <div className="px-4 py-6 space-y-4">
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Home</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">About</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Newsroom</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Partners</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Panda ads</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Contact</a>
                            <a href="#" className="block text-gray-800 hover:text-primary py-2 font-medium">Careers</a>

                            <div className="pt-4 border-t">
                                <button className="w-full px-4 py-3 bg-primary rounded-full text-white font-extrabold hover:bg-btn-hover transition-colors">
                                    Choose Location
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}