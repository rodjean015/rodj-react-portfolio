import React, { useState } from 'react';
import { FaPython, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from React Icons
import { SiFlask, SiArduino, SiTensorflow, SiScikitlearn, SiOpencv } from 'react-icons/si';
import pokerAI from './assets/poker_ai.png';
import pokerAPI from './assets/poker_api.png';
import blackjackBot from './assets/blackjack_bot.png';
import baccaratBot from './assets/baccarat_bot.png';
import lineageBot from './assets/lineage_bot.png';
import lineageLogs from './assets/lineage_logs.png';

const projects = [
  {
    title: "Poker AI",
    description: "A bot that can play different strategies in poker.",
    technologies: ["python", "flask", "opencv", "arduino", "tensorflow", "scikit-learn"],
    images: [pokerAPI, pokerAI],
  },
  {
    title: "BlackJack Bot",
    description: "A bot that can perform card counting",
    technologies: ["python", "opencv", "arduino"],
    images: [blackjackBot],
  },
  {
    title: "Baccarat Bot",
    description: "A bot that can perform Martingale System",
    technologies: ["python", "opencv", "arduino"],
    images: [baccaratBot],
  },
  {
    title: "Lineage II Bot",
    description: "A bot capable of setting an automated schedule.",
    technologies: ["python", "opencv", "arduino"],
    images: [lineageBot, lineageLogs],
  },
  {
    title: "Autocrop Tools",
    description: "Tools that can crop a specific region.",
    technologies: ["python"],
    images: [],
  },
  {
    title: "Auto Screenshot Tools",
    description: "Tools to automate screenshots.",
    technologies: ["python"],
    images: [],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0); // Start at the first image when opening the modal
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentSlide(0);
  };

  const goToNextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prevSlide) =>
        prevSlide === selectedProject.images.length - 1 ? 0 : prevSlide + 1
      );
    }
  };

  const goToPreviousSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? selectedProject.images.length - 1 : prevSlide - 1
      );
    }
  };

  // Function to get technology icons
  const getTechnologyIcons = (technologies) => {
    return technologies.map((technology, index) => {
      switch (technology) {
        case 'flask':
          return <SiFlask key={index} className="text-black text-2xl ml-3" />;
        case 'arduino':
          return <SiArduino key={index} className="text-green-600 text-2xl ml-3" />;
        case 'python':
          return <FaPython key={index} className="text-yellow-500 text-2xl ml-3" />;
        case 'tensorflow':
          return <SiTensorflow key={index} className="text-orange-600 text-2xl ml-3" />;
        case 'scikit-learn':
          return <SiScikitlearn key={index} className="text-blue-400 text-2xl ml-3" />;
        case 'opencv':
          return <SiOpencv key={index} className="text-red-500 text-2xl ml-3" />;
        default:
          return null;
      }
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-10 flex flex-col justify-center items-center transition-colors duration-300 
                bg-gray-200 dark:animate-gradient dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black"
    >
      <div className="container mx-auto p-5 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Developments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-right">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <div className="flex items-center">
                <button
                  onClick={() => handleViewProject(project)}
                  className="text-white bg-[#375e7e] hover:bg-gray-800 dark:hover:bg-[#375e7e] dark:bg-gray-800 px-3 py-1 rounded-md transition-colors duration-300"
                >
                  View Project
                </button>
                {/* Render icons for each technology */}
                {getTechnologyIcons(project.technologies)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with Image Slider */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full" data-aos="fade-down">
            {/* Image Slider */}
            <div className="flex flex-col items-center mb-6">
              {selectedProject.images.length > 0 ? (
                <img
                  src={selectedProject.images[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-64 object-contain rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-md mb-4">
                  <p className="text-gray-600 dark:text-gray-400">No Image Available</p>
                </div>
              )}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-between w-full">
                  <button
                    onClick={goToPreviousSlide}
                    className="text-[#375e7e] hover:text-gray-800 dark:hover:text-[#375e7e] dark:text-gray-700 p-2 rounded-full transition-colors duration-300"
                  >
                    <FaArrowLeft size={24} />
                  </button>
                  <button
                    onClick={goToNextSlide}
                    className="text-[#375e7e] hover:text-gray-800 dark:hover:text-[#375e7e] dark:text-gray-700 p-2 rounded-full transition-colors duration-300"
                  >
                    <FaArrowRight size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Project Information */}
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-6">{selectedProject.description}</p>
            <button
              onClick={closeModal}
              className="text-white bg-[#375e7e] hover:bg-gray-800 dark:hover:bg-[#375e7e] dark:bg-gray-700 px-4 py-2 rounded-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
