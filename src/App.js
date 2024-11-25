import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; // Import Navbar Component
import Skills from './components/SkillSection'; // Import Skills Component
import AboutSection from './components/AboutSection'; // Import AboutSection Component
import ProjectsSection from './components/ProjectsSection'; // Import ProjectsSection Component
import ContactSection from './components/ContactSection'; // Import ContactSection Component
import LoadingPage from './components/LoadingPage'; // Import the LoadingPage component
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Change to HashRouter

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu
  const [showNavbar, setShowNavbar] = useState(true); // State to manage navbar visibility
  const [loading, setLoading] = useState(true); // Loading state for loading page

  const links = [
    { href: "/about", label: "Personal Overview" },
    { href: "/projects", label: "Developments" },
    { href: "/skills", label: "Abilities" },
    { href: "/contact", label: "Connect" },
  ];

  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init({ duration: 1000, once: true });

    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Add scroll event listener to hide/show navbar based on scroll direction
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else {
        // Scrolling down
        setShowNavbar(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Set dark mode automatically based on time
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      setDarkMode(true); // Enable dark mode between 6 PM and 6 AM
    }

    // Cleanup timer and event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Toggle dark mode manually
  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  // Toggle mobile menu
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  if (loading) {
    return <LoadingPage darkMode={darkMode} />; // Pass darkMode to LoadingPage
  }

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 relative">
          {/* Navbar Component */}
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode} // Provide setDarkMode for automatic time-based adjustment
            handleDarkModeToggle={handleDarkModeToggle}
            menuOpen={menuOpen}
            handleMenuToggle={handleMenuToggle}
            links={links}
            showNavbar={showNavbar}
          />

          <main>
            <Routes>
              {/* Set About Section as the homepage */}
              <Route path="/" element={<AboutSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer
            className={`${
              darkMode ? 'bg-black' : 'bg-[#375e7e]'
            } text-white p-5 text-center transition-colors duration-300`}
          >
            <p>&copy; 2024 Rodj Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
