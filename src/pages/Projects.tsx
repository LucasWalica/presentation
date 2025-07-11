import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
export default function ProjectPage() {
   const projects = [
  {
    title: "FindYourRoom - Rental & Roommate Platform",
    description:
      "A comprehensive platform for tenants and landlords to manage rentals, search rooms, and connect with compatible roommates. Integrates property management, social networking, and compatibility matching features.",
    tech: ["Django REST Framework", "JWT", "Angular", "PostgreSQL", "Redis", "Celery", "Bash", "Tailwind CSS", "Docker"],
    link: ["https://github.com/LucasWalica/FindYourRoomAPP"]
  },
  {
    title: "Pandemic - Interactive Web Board Game",
    description:
      "An engaging web adaptation of the popular board game Pandemic, where players collaborate to save humanity from multiple diseases. Built with a robust backend and intuitive UI.",
    tech: ["Laravel", "Tailwind CSS", "Angular", "JWT"],
    link: ["https://github.com/LucasWalica/Pandemic", "https://github.com/LucasWalica/pandemicBack"]
  },
  {
    title: "Pokemon Data Analytics",
    description:
      "A data science project analyzing Pokémon stats to identify optimal team strategies. Utilizes Python libraries for data processing and visualization.",
    tech: ["Python", "CSV", "Pandas", "Matplotlib", "NumPy"],
    link: ["https://github.com/LucasWalica/PokemonAnalisisCSV"]
  },
  {
    title: "Discord Server Moderation Bot",
    description:
      "A feature-rich Discord bot that handles server moderation, manages roles, and awards achievements to users, improving community engagement and security.",
    tech: ["Django REST Framework", "Docker", "Celery", "Redis"],
    link: ["https://github.com/LucasWalica/discordBot"]
  },
  {
    title: "Library Management System",
    description:
      "A full-stack web application for managing library operations including customer accounts, item catalog, and loan tracking, built with modern Java frameworks.",
    tech: ["Spring Boot", "Angular", "H2 Database", "Maven", "Java", "Angular Material"],
    link: ["https://github.com/LucasWalica/Ejercicio1", "https://github.com/LucasWalica/TutorialBackend"]
  },
  {
    title: "Freelancer Marketplace Web App",
    description:
      "A platform connecting companies and freelancers, enabling job postings, applications, and project management with secure user authentication.",
    tech: ["Django", "Tailwind CSS", "MVC", "PostgreSQL"],
    link: ["https://github.com/LucasWalica/django_freelancer_project"]
  },
  {
    title: "Basic Forum Application",
    description:
      "A simple but effective forum web app featuring user authentication, post creation, and real-time updates, designed with a modern React frontend and Django REST API backend.",
    tech: ["Django REST Framework", "React", "Tailwind CSS", "JWT", "SQLite"],
    link: ["https://github.com/LucasWalica/django_react_forum"]
  }
];

    return (
        <div>
            <NavBar></NavBar>
            <main className="px-6 pt-24 pb-12 max-w-5xl mx-auto  bg-custom-background orbitron min-h-screen min-w-full">
                <h1 className="text-4xl font-bold mb-8 border-b-2 border-custom-neonGreen pb-2 text-center text-custom-neonGreen">
                    My Projects
                </h1>
                <div className="flex justify-center w-full">
                  <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map(proj => (
                        <ProjectCard 
                        key={proj.title}
                        title={proj.title}
                        description={proj.description}
                        tech={proj.tech}
                        link={proj.link}
                        />
                    ))}
                  </div>
                </div>
            </main>
        </div>
    )
}