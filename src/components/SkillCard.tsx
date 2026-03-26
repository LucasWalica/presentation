import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  text: string;
}

export default function SkillCard({ icon, text }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        flex flex-col items-center gap-5 p-8 rounded-2xl 
        bg-custom-darkGray/30 backdrop-blur-md border border-white/5
        hover:border-custom-neonGreen/30 transition-all duration-300
        min-h-[220px] text-center group
      "
    >
      <div className="w-16 h-16 relative">
        <img src={icon} alt="skill-icon" className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-custom-neonGreen/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <p className="text-sm text-custom-mutedWhite/80 group-hover:text-custom-neonGreen transition-colors duration-300 leading-relaxed font-mono tracking-tight">
        {text}
      </p>
    </motion.div>
  );
}
