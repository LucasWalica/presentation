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

        {/* Filter Badges - Technical Control Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-custom-neonGreen/40 animate-pulse"></div>
             <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-custom-mutedWhite/30">System_Filter.sh</span>
             <div className="w-1.5 h-1.5 rounded-full bg-custom-neonGreen/40 animate-pulse"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            <button
              onClick={() => setFilter("all")}
              className={`
                px-5 py-2 rounded-lg border text-[11px] font-mono uppercase tracking-widest transition-all duration-300
                ${filter === "all"
                  ? "bg-custom-neonGreen text-custom-background border-custom-neonGreen shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                  : "bg-white/5 text-custom-mutedWhite/40 border-white/5 hover:border-custom-neonGreen/40 hover:text-custom-neonGreen/60"
                }
              `}
            >
              [ ALL_PROJ ]
            </button>
            {uniqueTechs.slice(0, 10).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`
                  px-5 py-2 rounded-lg border text-[11px] font-mono uppercase tracking-widest transition-all duration-300
                  ${filter === tech
                    ? "bg-custom-neonGreen text-custom-background border-custom-neonGreen shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                    : "bg-white/5 text-custom-mutedWhite/40 border-white/5 hover:border-custom-neonGreen/40 hover:text-custom-neonGreen/60"
                  }
                `}
              >
                {tech}
              </button>
            ))}
          </div>
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

      {/* POP UP - PROJECT EXPLORER */}
      <AnimatePresence>
        {showPopUp && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-custom-background/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={handleClosePopUp}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative bg-custom-darkGray/40 border border-white/10
                rounded-3xl shadow-2xl shadow-custom-neonGreen/5
                backdrop-blur-2xl w-full max-w-4xl 
                max-h-[90vh] overflow-hidden flex flex-col
              "
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5 flex-shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/20"></div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-custom-mutedWhite/30 font-mono">Project_Details.bin</div>
                <button
                  onClick={handleClosePopUp}
                  className="text-custom-mutedWhite/40 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Window Content */}
              <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-5xl font-bold text-white orbitron tracking-tight leading-tight">
                        {selectedProject.title}
                      </h2>
                      <div className="h-1 w-20 bg-custom-neonGreen/40 rounded-full"></div>
                    </div>

                    <p className="text-custom-mutedWhite/80 text-lg leading-relaxed font-light">
                      {selectedProject.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-custom-neonGreen/60 font-mono">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech?.map((t: string) => (
                          <span
                            key={t}
                            className="
                              text-[11px] px-3 py-1 rounded bg-white/5
                              text-custom-mutedWhite/70 border border-white/5
                              font-mono transition-colors hover:border-custom-neonGreen/30 hover:text-custom-neonGreen
                            "
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links & Docs */}
                    <div className="flex flex-wrap gap-4 pt-6">
                      {selectedProject.link?.map((link: string, idx: number) => (
                        <a
                          key={idx}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-2 px-6 py-3 rounded-xl
                            bg-custom-neonGreen text-custom-background font-bold
                            hover:bg-custom-neonGreen-soft transition-all transform hover:-translate-y-1
                            shadow-lg shadow-custom-neonGreen/10
                          "
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.79 1.102.79 2.222v3.293c0 .319.232.694.847.576 4.765-1.588 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12m3.601 18.3c-.31.65-.89 1.15-1.61 1.4-1.28.43-2.64.43-3.92 0-.72-.25-1.3-.75-1.61-1.4a.42.42 0 01.3-.57.42.42 0 01.55.24c.24.5.69.89 1.24 1.08.99.33 2.04.33 3.03 0 .55-.19 1-.58 1.24-1.08a.42.42 0 01.78.33z"/>
                          </svg>
                          Open Source
                        </a>
                      ))}
                      {selectedProject.documentation && (
                        <a
                          href={selectedProject.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center gap-2 px-6 py-3 rounded-xl
                            border border-custom-neonGreen/30 text-custom-neonGreen font-bold
                            hover:bg-custom-neonGreen/5 transition-all
                          "
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Docs
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                    {selectedProject.image ? (
                      <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-custom-background/60 to-transparent"></div>
                      </div>
                    ) : (
                      <div className="aspect-video rounded-2xl bg-white/5 border border-dashed border-white/10 flex items-center justify-center">
                        <span className="text-custom-mutedWhite/20 uppercase tracking-[0.2em] font-mono text-xs">Visual_Data_Not_Found</span>
                      </div>
                    )}
                    
                    {/* Status Info */}
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-custom-mutedWhite/40 uppercase tracking-widest font-mono">Build_Status</span>
                        <span className="text-custom-neonGreen font-mono">OPERATIONAL</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-custom-mutedWhite/40 uppercase tracking-widest font-mono">Encryption</span>
                        <span className="text-custom-cyberBlue font-mono">JWT_SECURE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
