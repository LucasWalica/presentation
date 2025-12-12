import { useState } from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import stlMarket  from "../../public/stlMarket.png";
import blogImage from "../../public/blog.png";
import discordImage from "../../public/discordBot.png";
import pandemicImage from "../../public/pandemic.png";
import findYourRoomImage from "../../public/findYourRoom.png";
import freelanceImage from "../../public/freelance_project.png";
import subastas from "../../public/subastas.png";

export default function ProjectPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    if(!showPopUp) return;
    setShowPopUp(false);
    setSelectedProject(null);
  };

  

  const projects = [
  {
    title: "FindYourRoomApp",
    cardDescription: "A platform for managing rentals, searching rooms, and connecting with compatible roommates.",
    description:
      "A comprehensive platform for tenants and landlords to manage rentals, search rooms, and connect with compatible roommates. Integrates property management, social networking, and compatibility matching features.",
    tech: ["Django REST Framework", "JWT", "Angular", "PostgreSQL", "Redis", "Celery", "Bash", "Tailwind CSS", "Docker"],
    link: ["https://github.com/LucasWalica/FindYourRoomAPP"],
    documentation: "https://deepwiki.com/LucasWalica/FindYourRoomAPP",
    image: findYourRoomImage
  },
  {
    title:"Auctions Real time",
    cardDescription: "A fullstack web app for managing auctions, bids, items...",
    description: "A dynamic web platform for creating, managing, and participating in online auctions in real-time. Built with Django for the backend and Angular for the frontend, the application integrates Firebase for secure authentication and WebSockets for live auction updates. Key features include"+
    "User Authentication & Roles: Secure login system using JWT and Firebase Custom Tokens."+
    "Auction Management: Create, edit, and manage live and timed auctions with multiple items."+
    "Item Management: Add, update, and organize items with images, descriptions, and starting prices."+
    "Real-Time Bidding: Users can place bids with instant updates on current highest offers."+
    "Sales Tracking: Manage payments and view auction results with status filters (Pending, Paid, Confirmed, Dispute)"+
    "Backend Automation: Uses Celery and Redis to handle scheduled auctions and automated workflows."+
    "Responsive Design: Optimized for desktop and mobile interfaces, ensuring a seamless user experience."+
    "This project demonstrates strong skills in full-stack development, real-time systems, and integrating multiple services, showcasing both technical depth and attention to user experience.",
    tech: ["Django REST Framework", "JWT cookies", "Firebase", "Postgresql", "Docker", "Redis", "Celery", "Tailwindcss", "Angular 21", "Daphne", "Nginx", "Bash"],
    link: ["https://github.com/LucasWalica/subastas_real_time"],
    documentation: "",
    image: subastas
  },
  {
    title: "STL Marketplace ",
    cardDescription: "(in development) A marketplace for buying and selling 3D printable STL files.",
    description:
      "(currently in development) A marketplace for buying and selling 3D printable STL files, featuring user accounts, product listings, and secure transactions. The main idea is to help 3D designers monetize their creations via collections.",
    tech: ["Django REST", "Angular 20", "sqlite3", "Three.js", "Tailwind CSS"],
    link: ["https://github.com/LucasWalica/STLMarketPlace"],
    documentation: "https://deepwiki.com/LucasWalica/STLMarketPlace/1-stl-marketplace-overview",
    image: stlMarket
  },
  {
    title: "Pandemic Board Game",
    cardDescription: "A web adaptation of the popular board game Pandemic, where players collaborate to save humanity from diseases.",
    description:
      "An engaging web adaptation of the popular board game Pandemic, where players collaborate to save humanity from multiple diseases. Built with a robust backend and intuitive UI.",
    tech: ["Laravel", "Tailwind CSS", "Angular", "JWT"],
    link: ["https://github.com/LucasWalica/Pandemic", "https://github.com/LucasWalica/pandemicBack"],
    documentation: "https://deepwiki.com/LucasWalica/Pandemic",
    image: pandemicImage
  },
  {
    title: "Discord Server Moderation Bot",
    description:
      "A feature-rich Discord bot that handles server moderation, manages roles, and awards achievements to users, improving community engagement and security.",
    tech: ["Django REST Framework", "Docker", "Celery", "Redis"],
    link: ["https://github.com/LucasWalica/discordBot"],
    documentation: "https://deepwiki.com/LucasWalica/discordBot",
    image: discordImage
  },
  /* 
  {
    title: "Freelancer Marketplace Web",
    description:
      "A platform connecting companies and freelancers, enabling job postings, applications, and project management with secure user authentication.",
    tech: ["Django", "Tailwind CSS", "MVC", "PostgreSQL"],
    link: ["https://github.com/LucasWalica/django_freelancer_project"],
    documentation: "https://deepwiki.com/LucasWalica/django_freelancer_project",
    image: freelanceImage
  },
  {
    title: "Basic Forum Application",
    cardDescription: "A simple forum web app with user authentication, post creation, and real-time updates.",
    description:
      "A simple but effective forum web app featuring user authentication, post creation, and real-time updates, designed with a modern React frontend and Django REST API backend.",
    tech: ["Django REST Framework", "React", "Tailwind CSS", "JWT", "SQLite"],
    link: ["https://github.com/LucasWalica/django_react_forum"],
    documentation: "https://deepwiki.com/LucasWalica/django_react_forum",
    image: blogImage
  },
  */
  {
    title: "Pokemon Data Analytics",
    description:
      "A data science project analyzing Pokémon stats to identify optimal team strategies. Utilizes Python libraries for data processing and visualization.",
    tech: ["Python", "CSV", "Pandas", "Matplotlib", "NumPy"],
    link: ["https://github.com/LucasWalica/PokemonAnalisisCSV"]
  },
  {
    title: "Library Management System",
    description:
      "A full-stack web application for managing library operations including customer accounts, item catalog, and loan tracking, built with modern Java frameworks.",
    tech: ["Spring Boot", "Angular", "H2 Database", "Maven", "Java", "Angular Material"],
    link: ["https://github.com/LucasWalica/Ejercicio1", "https://github.com/LucasWalica/TutorialBackend"]
  }
];

  return (
    <div className="min-h-screen bg-custom-background orbitron">
      <NavBar />
      <main className="px-6 pt-24 pb-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b-2 border-custom-neonGreen pb-3 text-center text-custom-neonGreen neon-glow">
          My Projects
        </h1>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {projects.map((proj) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                description={proj.cardDescription || proj.description}
                tech={proj.tech}
                onClick={() => handleCardClick(proj)}
              />
            ))}
          </div>
        </div>

      </main>

      {/* POP UP */}
     {showPopUp && selectedProject && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={handleClosePopUp}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="
        relative bg-custom-darkGray/90 border border-custom-neonGreen/40 
        text-custom-neonGreen rounded-2xl shadow-xl shadow-custom-neonGreen/30
        backdrop-blur-xl w-full max-w-3xl 
        max-h-[90vh] overflow-y-auto
        p-6
      "
    >
      {/* Close Button */}
      <button
        onClick={handleClosePopUp}
        className="
          absolute top-4 right-4 text-xl font-bold 
          text-custom-neonGreen hover:text-white transition
        "
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-4 ">
        {selectedProject.title}
      </h2>

      {/* Description */}
      <p className="text-center text-lg text-custom-neonGreen-soft mb-6">
        {selectedProject.description}
      </p>

      {/* Image */}
      {selectedProject.image && (
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg w-full mb-6"
        />
      )}

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 underline">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {selectedProject.tech?.map((t: string) => (
            <span
              key={t}
              className="
                text-sm px-3 py-1 rounded-full bg-custom-darkGray
                text-custom-neonGreen border border-custom-neonGreen/20
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {selectedProject.link && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 underline">Links</h3>
          <ul className="list-disc list-inside">
            {selectedProject.link.map((link: string, idx: number) => (
              <li key={idx}>
                <a
                  href={link}
                  target="_blank"
                  className="hover:text-white transition underline"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Documentation */}
      {selectedProject.documentation && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 underline">Documentation</h3>
          <a
            href={selectedProject.documentation}
            target="_blank"
            className="hover:text-white transition underline"
            rel="noopener noreferrer"
          >
            {selectedProject.documentation}
          </a>
        </div>
      )}
    </motion.div>
  </motion.div>
)}

    </div>
  );
}
