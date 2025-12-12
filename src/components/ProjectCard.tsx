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
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.35 }}
      className="
        cursor-pointer border border-custom-neonGreen/30 rounded-2xl 
        bg-white/5 backdrop-blur-md shadow-md hover:shadow-custom-neonGreen/40 
        p-6 flex flex-col gap-4 w-full sm:w-80 md:w-96 transition
      "
    >
      <h2 className="text-2xl font-bold text-center text-custom-neonGreen">
        {title}
      </h2>

      <p className="text-custom-neonGreen-soft text-sm flex-1 overflow-hidden">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="
              text-xs px-3 py-1 rounded-full 
              bg-custom-darkGray/80 text-custom-neonGreen 
              border border-custom-neonGreen/20
            "
          >
            {t}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="
          w-full mt-2 py-2 rounded-lg text-black font-bold
          bg-custom-neonGreen shadow-md shadow-custom-neonGreen/20
          hover:bg-custom-neonGreen-soft transition
        "
      >
        View Details
      </motion.button>
    </motion.div>
  );
}
