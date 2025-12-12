import { motion } from "framer-motion";

interface InterestCardProps {
  title: string;
  description: string;
}

export default function InterestCard({ title, description }: InterestCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-md
        border border-custom-neonGreen/30 shadow-md hover:shadow-custom-neonGreen/40
        text-center min-h-[220px]
      "
    >
      <h3 className="text-xl font-bold mb-2 neon-glow">{title}</h3>
      <p className="text-custom-neonGreen text-sm sm:text-base">{description}</p>
    </motion.div>
  );
}
