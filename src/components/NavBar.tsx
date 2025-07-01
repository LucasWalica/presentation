import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();

  const goToAboutMePage = () => {
    navigate("/")
  }

  const goToProjectPage = () => {
    navigate("/projects")
  }

  const goToSkillPage = () => {
    navigate("/skills")
  }

  const goToContactPage = () => {
    navigate("/contact");
  }
  
  return (
    <div className="w-full mt-0 relative">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-custom-softGray z-50 p-4 shadow-lg">
        <div className="justify-center">
            <button
            className="btn-neon w-1/2"
            onClick={() => setShowNavBar(prev => !prev)}
            >
            {showNavBar ? "Hide Menu" : "Show Menu"}
            </button>
        </div>

        {showNavBar && (
          <div className="flex flex-col animate-fade-in-down mt-2">
            <button onClick={goToAboutMePage} className="btn-neon">About Me</button>
            <button onClick={goToProjectPage} className="btn-neon">Projects</button>
            <button onClick={goToSkillPage} className="btn-neon">Skills</button>
            <button onClick={goToContactPage} className="btn-neon">Contact</button>
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="orbitron hidden md:flex fixed top-0 left-0 w-full justify-end space-x-4 bg-custom-softGray p-4 z-40 shadow-lg">
            <button onClick={goToAboutMePage} className="btn-neon">About Me</button>
            <button onClick={goToProjectPage} className="btn-neon">Projects</button>
            <button onClick={goToSkillPage} className="btn-neon">Skills</button>
            <button onClick={goToContactPage} className="btn-neon">Contact</button>
      </div>
    </div>
  );
}
