import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks ,SiHackerrank  } from "react-icons/si";




const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Mayur Burale</h2>

    

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
          
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mayur-burale-949096258" },
            { icon: <FaGithub />, link: "https://github.com/mayurburale2004" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/mayurburale" },
               { icon:<SiGeeksforgeeks />, link: "https://www.geeksforgeeks.org/user/mayurburale" },
                  { icon:<SiHackerrank />, link: "https://www.hackerrank.com/profile/mayurburale" },
                
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Mayur Burale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;