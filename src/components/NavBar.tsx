import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  activeSection: string;
}

export default function NavBar({ activeSection }: NavBarProps) {
  const [showNavBar, setShowNavBar] = useState(false);
  
  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
  ];

  const handleNavigate = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowNavBar(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Lucas_Walica.pdf';
    link.download = 'CV_Lucas_Walica.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-custom-softGray/90 shadow-lg">
      
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between items-center p-4 orbitron">
        <span className="font-bold text-xl text-custom-neonGreen">Lucas Walica</span>
        <div className="flex space-x-6">
          {links.map(link => (
            <button
              key={link.name}
              onClick={() => handleNavigate(link.path)}
              className={`btn-neon px-4 py-2 transition-colors duration-300 ${
                activeSection === link.path.substring(1) ? "bg-custom-neonGreen text-black" : ""
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={handleDownloadCV}
            className="btn-neon px-4 py-2 bg-custom-neonGreen text-black hover:bg-transparent hover:text-custom-neonGreen transition-all duration-300"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center p-4 orbitron">
        <span className="font-bold text-xl text-custom-neonGreen">Lucas Walica</span>
        <button
          onClick={() => setShowNavBar(prev => !prev)}
          className="btn-neon px-3 py-2"
        >
          {showNavBar ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {showNavBar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col space-y-2 p-4 bg-custom-softGray/95 shadow-lg"
          >
            {links.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.path)}
                className={`btn-neon px-4 py-2 transition-colors duration-300 ${
                  activeSection === link.path.substring(1) ? "bg-custom-neonGreen text-black" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="btn-neon px-4 py-2 bg-custom-neonGreen text-black hover:bg-transparent hover:text-custom-neonGreen transition-all duration-300"
            >
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
