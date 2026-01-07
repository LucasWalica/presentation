import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
  activeSection?: string;
}

export default function NavBar({ activeSection = "" }: NavBarProps) {
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
    <>
      {/* Floating Menu Button */}
      <button
        onClick={() => setShowNavBar(prev => !prev)}
        className="
          fixed top-4 right-4 z-50 p-3 bg-custom-neonGreen/90 backdrop-blur-sm
          border-2 border-custom-neonGreen rounded-lg shadow-lg shadow-custom-neonGreen/30
          hover:bg-custom-neonGreen hover:scale-110 transition-all duration-300
          lg:hidden
        "
      >
        <svg 
          className="w-6 h-6 text-custom-background" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {showNavBar ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Collapsible Menu */}
      <AnimatePresence>
        {showNavBar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              fixed top-16 right-4 z-40 w-64 max-w-[80vw]
              bg-custom-darkGray/95 backdrop-blur-md border border-custom-neonGreen/30
              rounded-xl shadow-2xl shadow-custom-neonGreen/20
              lg:hidden
            "
          >
            <div className="p-4 space-y-3">
              <div className="text-center mb-4 pb-3 border-b border-custom-neonGreen/20">
                <span className="font-bold text-lg text-custom-neonGreen orbitron">Menu</span>
              </div>
              
              {links.map(link => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                    border border-custom-neonGreen/20 hover:border-custom-neonGreen/60
                    ${
                      activeSection === link.path.substring(1) 
                        ? "bg-custom-neonGreen/20 text-custom-neonGreen border-custom-neonGreen" 
                        : "text-custom-neonGreen-soft hover:text-custom-neonGreen hover:bg-custom-neonGreen/10"
                    }
                  `}
                >
                  {link.name}
                </button>
              ))}
              
              <button
                onClick={handleDownloadCV}
                className="
                  w-full px-4 py-3 rounded-lg font-bold
                  bg-custom-neonGreen text-custom-background
                  hover:bg-custom-neonGreen-soft transition-all duration-300
                  shadow-md shadow-custom-neonGreen/20
                "
              >
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar - improved */}
      <div className="hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="
          bg-custom-darkGray/95 backdrop-blur-md border border-custom-neonGreen/30
          rounded-2xl shadow-2xl shadow-custom-neonGreen/20 px-8 py-3
          flex items-center space-x-8 orbitron
        ">
          <span className="font-bold text-lg text-custom-neonGreen mr-4">Lucas Walica</span>
          
          <div className="flex items-center space-x-2">
            {links.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.path)}
                className={`
                  px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                  border border-transparent hover:border-custom-neonGreen/40
                  ${
                    activeSection === link.path.substring(1) 
                      ? "bg-custom-neonGreen/20 text-custom-neonGreen border-custom-neonGreen/60" 
                      : "text-custom-neonGreen-soft hover:text-custom-neonGreen hover:bg-custom-neonGreen/10"
                  }
                `}
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleDownloadCV}
            className="
              px-4 py-2 rounded-lg text-sm font-bold
              bg-custom-neonGreen text-custom-background
              hover:bg-custom-neonGreen-soft transition-all duration-300
              shadow-md shadow-custom-neonGreen/20 hover:shadow-lg hover:shadow-custom-neonGreen/40
            "
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      <AnimatePresence>
        {showNavBar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden"
            onClick={() => setShowNavBar(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
