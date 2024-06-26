import React from "react";
import Resume from '../assets/assets/Nasvan-K.pdf';
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
          download="Nasvan-K.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
