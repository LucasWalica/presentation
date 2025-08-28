import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string[];
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-custom-softGray p-6 rounded-xl shadow-lg hover:shadow-custom-neonGreen hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-bold mb-3 orbitron text-custom-darkGray bg-custom-neonGreen-deep rounded-md p-3 text-center neon-glow">
        {title}
      </h2>
      <p className="text-custom-neonGreen-soft mb-4">{description}</p>
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
      <div className="flex flex-col space-y-2">
        {link.length > 1 ? (
          <>
            <a
              href={link[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon"
            >
              View Frontend Code
            </a>
            <a
              href={link[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon"
            >
              View Backend Code
            </a>
          </>
        ) : (
          <a
            href={link[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
            View Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
