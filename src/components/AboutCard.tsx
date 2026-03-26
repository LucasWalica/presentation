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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="
        relative group p-6 bg-custom-darkGray/40 backdrop-blur-md
        border border-white/5 rounded-xl overflow-hidden
        hover:border-custom-neonGreen/40 transition-all duration-500
      "
    >
      {/* Subtle Glow background */}
      <div className="absolute inset-0 bg-custom-neonGreen/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Simple Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold tracking-widest text-custom-neonGreen uppercase orbitron opacity-80 group-hover:opacity-100">
          {title}
        </h2>
        <div className="w-8 h-[1px] bg-custom-neonGreen/20 group-hover:w-full transition-all duration-700"></div>
      </div>

      <div className="text-custom-mutedWhite/90 relative z-10 leading-relaxed">
        {children}
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-custom-neonGreen scale-x-0 group-hover:scale-x-50 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
}
