import { motion } from "framer-motion";

interface AboutCardProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export default function AboutCard({ title, children, delay = 0 }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="
        border border-custom-neonGreen/40 
        p-6 rounded-2xl shadow-md backdrop-blur-md bg-white/5
        hover:shadow-custom-neonGreen/50 hover:scale-105 transition-transform
        text-custom-neonGreen
      "
    >
      <h2 className="text-xl font-bold mb-3 neon-glow">{title}</h2>
      <div className="text-custom-neonGreen-soft">{children}</div>
    </motion.div>
  );
}
