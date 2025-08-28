import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "About Me", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setShowNavBar(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-custom-softGray/90 shadow-lg">
      
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-end space-x-6 p-4 orbitron">
        {links.map(link => (
          <button
            key={link.name}
            onClick={() => handleNavigate(link.path)}
            className={`btn-neon px-4 py-2 transition-colors duration-300 ${
              location.pathname === link.path ? "bg-custom-neonGreen text-black" : ""
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4 orbitron">
        <span className="font-bold text-xl text-custom-neonGreen">Portfolio</span>
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
            className="md:hidden flex flex-col space-y-2 p-4 bg-custom-softGray/95 shadow-lg"
          >
            {links.map(link => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.path)}
                className={`btn-neon px-4 py-2 transition-colors duration-300 ${
                  location.pathname === link.path ? "bg-custom-neonGreen text-black" : ""
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
