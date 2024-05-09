import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-gray-900 p-4 flex flex-col items-center justify-center">
      <span>© 2024 Matias Arroyo. All rights reserved.</span>
      <div>
        <a href="https://linkedin.com/in/matias-arroyo19" target="_blank" rel="noopener noreferrer" className="text-black p-2">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/matiasarroyo1978/audio-test" target="_blank" rel="noopener noreferrer" className="text-black p-2">
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
