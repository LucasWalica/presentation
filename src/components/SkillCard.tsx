import { motion } from "framer-motion";
// SkillCard component
interface SkillCardProps {
  icon: string;
  text: string;
}

export default function SkillCard({ icon, text }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 flex flex-row items-center space-x-4 border-b border-custom-neonGreen py-4 px-4 rounded-lg hover:scale-105 hover:shadow-custom-neonGreen transition-transform duration-300"
    >
      <img src={icon} alt="Skill icon" width={64} height={64} />
      <p className="text-custom-neonGreen-soft orbitron text-lg">{text}</p>
    </motion.div>
  );
}