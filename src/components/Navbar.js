import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for SPA navigation

const Navbar = ({ darkMode, handleDarkModeToggle, menuOpen, handleMenuToggle, links, showNavbar }) => {
  return (
    <>
      {/* Main Navbar */}
      <header
        className={`${darkMode ? 'bg-gray-900' : 'bg-[#375e7e]'} shadow-md transition-transform duration-300 z-10 fixed top-0 left-0 right-0 ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="container mx-auto p-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FaReact className="text-4xl text-cyan-400 animate-spin-slow" aria-hidden="true" /> {/* Animated React Icon */}
            <h1 className="text-2xl font-bold text-white">RODJEAN</h1>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-2xl text-white"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex items-center space-x-4">
            <ul className="flex space-x-7">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white hover:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={handleDarkModeToggle}
              className="p-2 transition-colors duration-300 text-2xl flex items-center text-white"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <MdLightMode className="text-yellow-300" /> // Icon with yellow color for light mode
              ) : (
                <MdDarkMode className="text-yellow-300" /> // Icon with yellow color for dark mode
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className={`fixed top-0 right-0 h-full w-64 ${
              darkMode ? 'bg-gray-900' : 'bg-[#375e7e]'
            } shadow-md transform transition-transform duration-500 ease-in-out z-20 sm:hidden`}
          >
            <div className="p-5 flex flex-col space-y-4" data-aos="fade-left">
              <button
                onClick={handleMenuToggle}
                className="text-2xl mb-5 self-end text-white"
                aria-label="Close Menu"
              >
                <AiOutlineClose />
              </button>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => handleMenuToggle(false)}
                  className="hover:text-blue-500 dark:hover:text-gray-300 text-xl text-white"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleDarkModeToggle}
                className="p-2 mt-5 transition-colors duration-300 text-2xl flex items-center text-white"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <MdLightMode className="text-yellow-300" />
                ) : (
                  <MdDarkMode className="text-yellow-300" />
                )}
              </button>
            </div>
          </div>
          {/* Background Overlay when Menu is Open */}
          <div
            onClick={handleMenuToggle}
            className="fixed inset-0 bg-black opacity-50 z-10 sm:hidden"
            aria-hidden="true"
          />
        </>
      )}
    </>
  );
};

export default Navbar;
