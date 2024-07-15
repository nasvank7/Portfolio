import React from "react";
import Resume from '../assets/assets/Nasvan-Portfolio.pdf';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a 
          className="mx-2 max-w-[150px] bg-blue-950 rounded-sm p-2 cursor-pointer" 
          href={Resume} 
          download="Nasvan-Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/nasvank7" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nasvan-k-671771261/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/_nasvan_k/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      
      </div>
    </nav>
  );
};

export default Navbar;
