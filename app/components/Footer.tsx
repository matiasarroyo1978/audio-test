import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 p-4 flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-4xl">
        <span>© 2024 Matias Arroyo. All rights reserved.</span>
        <div>
          <a href="https://www.linkedin.com/in/matias-arroyo19" target="_blank" rel="noopener noreferrer" className="text-gray-800 p-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.github.com/matiasarroyo1978/audio-test" target="_blank" rel="noopener noreferrer" className="text-gray-800 p-2">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
