// AboutSection.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilePic from './assets/profile_pic.png';
import useSpiderWebEffect from '../hooks/useSpiderWebEffect'; // Adjust the path as necessary

const AboutSection = () => {
  // Use the spider web effect custom hook
  useSpiderWebEffect();

  return (
    <section
      id="about"
      data-aos="fade-down"
      className="relative min-h-screen mx-auto p-5 sm:p-10 text-center flex flex-col sm:flex-row justify-center items-center gap-8"
    >
      {/* Spider-Web Background Container */}
      <div id="spider-web-container" className="spider-web-container"></div>
      {/* Profile Picture */}
      <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gray-200">
        <img
          src={profilePic} // Replace this URL with the link to your actual profile picture
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Text */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Overview</h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto sm:mx-0 mb-6">
          Hi, I'm an experienced software engineer specializing in developing machine learning and artificial intelligence solutions. Currently, I am expanding my expertise in front-end and back-end web development to build modern, responsive, and interactive user experiences.
        </p>

        {/* Social Media Links */}
        <div className="flex gap-5 mt-4" data-aos="fade-up">
          {[
            { href: 'https://github.com/rodjean015', icon: <FaGithub size={32} /> },
            { href: 'https://linkedin.com/in/rodjean-verzosa-326a7b255', icon: <FaLinkedin size={32} /> },
            { href: '/', icon: <FaTwitter size={32} /> },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
