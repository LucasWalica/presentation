import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  text: string;
}

export default function SkillCard({ icon, text }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        flex flex-col items-center gap-4 p-6 rounded-2xl 
        bg-white/5 backdrop-blur-md border border-custom-neonGreen/30
        shadow-md hover:shadow-custom-neonGreen/40 transition
        min-h-[200px] text-center
      "
    >
      <img src={icon} alt="skill-icon" className="w-16 h-16 object-contain" />
      <p className="text-sm sm:text-base text-custom-neonGreen">{text}</p>
    </motion.div>
  );
}
