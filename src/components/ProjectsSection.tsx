import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import stlMarket from "../../public/stlMarket.png";
import discordImage from "../../public/discordBot.png";
import pandemicImage from "../../public/pandemic.png";
import findYourRoomImage from "../../public/findYourRoom.png";
import subastas from "../../public/subastas.png";

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

export default function ProjectsSection() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    if(!showPopUp) return;
    setShowPopUp(false);
    setSelectedProject(null);
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.tech.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const uniqueTechs = Array.from(new Set(projects.flatMap(project => project.tech)));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-custom-electricPurple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-custom-acidYellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-neonGreen mb-4">
            My Projects
          </h2>
          <p className="text-lg text-custom-neonGreen-soft max-w-2xl mx-auto">
            A showcase of my technical skills and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              filter === "all"
                ? "bg-custom-neonGreen text-custom-background border-custom-neonGreen"
                : "bg-transparent text-custom-neonGreen border-custom-neonGreen/50 hover:border-custom-neonGreen"
            }`}
          >
            All Projects
          </button>
          {uniqueTechs.slice(0, 6).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                filter === tech
                  ? "bg-custom-neonGreen text-custom-background border-custom-neonGreen"
                  : "bg-transparent text-custom-neonGreen border-custom-neonGreen/50 hover:border-custom-neonGreen"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={proj.title}
                description={proj.cardDescription || proj.description}
                tech={proj.tech}
                onClick={() => handleCardClick(proj)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POP UP */}
      <AnimatePresence>
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
      </AnimatePresence>
    </section>
  )
}
