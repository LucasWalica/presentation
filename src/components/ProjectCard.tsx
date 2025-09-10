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
      className="flex flex-col justify-between bg-custom-softGray p-6 rounded-xl shadow-lg hover:shadow-custom-neonGreen hover:scale-105 transition-transform duration-300
                 min-h-[400px] max-h-[400px] w-full sm:w-80 md:w-96"
    >
      {/* Title */}
      <h2 className="flex justify-center items-center text-2xl font-bold mb-3 orbitron text-custom-darkGray bg-custom-neonGreen-deep rounded-md p-3 text-center neon-glow min-h-[72px]">
        {title}
      </h2>

      {/* Description */}
      <p className="text-custom-neonGreen-soft mb-4 flex-1 overflow-hidden text-ellipsis 
                    text-sm sm:text-base md:text-sm">
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4 min-h-[80px]">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm px-3 py-1 bg-custom-darkGray rounded text-custom-neonGreen font-semibold hover:bg-custom-neonGreen hover:text-black transition-colors duration-200 cursor-default"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-auto">
        <button
          className="btn-neon w-full"
          onClick={onClick}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
