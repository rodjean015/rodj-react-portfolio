import React from 'react';
import { SiLaravel, SiJavascript, SiReact, SiTailwindcss, SiTensorflow, SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiFlask, SiDjango, SiGooglecloud, SiDocker, SiVuedotjs, SiBootstrap, SiAmazonwebservices , SiMicrosoftazure, SiMysql, SiMongodb} from 'react-icons/si';
import { FaNodeJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';

const skills = [
  { icon: <SiJavascript className="text-yellow-500 text-2xl" />, label: 'JavaScript' },
  { icon: <SiReact className="text-blue-400 text-2xl" />, label: 'React' },
  { icon: <FaNodeJs className="text-green-600 text-2xl" />, label: 'Node.js' },
  { icon: <SiTailwindcss className="text-teal-400 text-2xl" />, label: 'Tailwind CSS' },
  { icon: <FaHtml5 className="text-orange-600 text-2xl" />, label: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600 text-2xl" />, label: 'CSS3' },
  { icon: <FaPython className="text-yellow-500 text-2xl" />, label: 'Python' },
  { icon: <SiTensorflow className="text-orange-600 text-2xl" />, label: 'TensorFlow' },
  { icon: <SiScikitlearn className="text-blue-400 text-2xl" />, label: 'Scikit-Learn' },
  { icon: <SiOpencv className="text-green-400 text-2xl" />, label: 'OpenCV' },
  { icon: <SiPandas className="text-blue-500 text-2xl" />, label: 'Pandas' },
  { icon: <SiNumpy className="text-blue-400 text-2xl" />, label: 'NumPy' },
  { icon: <SiArduino className="text-blue-600 text-2xl" />, label: 'Arduino' },
  { icon: <SiFlask className="text-black text-2xl" />, label: 'Flask' },
  { icon: <SiDjango className="text-green-800 text-2xl" />, label: 'Django' },
  { icon: <SiGooglecloud className="text-blue-400 text-2xl" />, label: 'Google Cloud' },
  { icon: <SiDocker className="text-blue-600 text-2xl" />, label: 'Docker' },
  { icon: <FaPython className="text-blue-500 text-2xl" />, label: 'ttkbootstrap' },
  { icon: <SiVuedotjs className="text-green-500 text-2xl" />, label: 'Vue.js' },
  { icon: <SiBootstrap className="text-purple-600 text-2xl" />, label: 'Bootstrap' },
  { icon: <SiAmazonwebservices  className="text-orange-500 text-2xl" />, label: 'AWS' },
  { icon: <SiMicrosoftazure className="text-blue-600 text-2xl" />, label: 'Azure' },
  { icon: <SiLaravel className="text-red-600 text-2xl" />, label: 'Laravel' },
  { icon: <SiMysql className="text-blue-600 text-2xl" />, label: 'MySQL' },
  { icon: <SiMongodb className="text-green-600 text-2xl" />, label: 'MongoDB' },
];

function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-10 flex flex-col justify-center items-center transition-colors duration-300 
                bg-gray-200 dark:animate-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-black"
    >
      <div className="container mx-auto p-5 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8" data-aos="fade-up">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 px-5 py-3 rounded-full transition duration-500 flex items-center gap-2 transform hover:-translate-y-2"
            >
              {skill.icon}
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;