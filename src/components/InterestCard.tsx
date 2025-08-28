import { motion } from "framer-motion";
interface InterestCardProps {
  title: string;
  description: string;
}

export default function InterestCard({ title, description }: InterestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-custom-softGray p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform text-custom-neonGreen"
    >
      <h3 className="text-xl font-bold mb-2 neon-glow">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}