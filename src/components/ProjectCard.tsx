import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  onClick: () => void;
}

export default function ProjectCard({ title, description, tech, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-custom-softGray p-6 rounded-xl shadow-lg hover:shadow-custom-neonGreen hover:scale-105 transition-transform duration-300"
    >
      <h2 className="h-20 flex justify-center items-center text-2xl font-bold mb-3 orbitron text-custom-darkGray bg-custom-neonGreen-deep rounded-md p-3 text-center neon-glow">
        {title}
      </h2>
      <p className="text-custom-neonGreen-soft mb-4 h-36">
        {description}
      </p>
      <div className="h-32">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(t => (
            <span
              key={t}
              className="text-sm px-3 py-1 bg-custom-darkGray rounded text-custom-neonGreen font-semibold hover:bg-custom-neonGreen hover:text-black transition-colors duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <button 
          className="btn-neon mt-2"
          onClick={onClick}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
