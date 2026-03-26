import { motion } from "framer-motion";

interface InterestCardProps {
  title: string;
  description: string;
}

export default function InterestCard({ title, description }: InterestCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="
        flex flex-col p-8 rounded-2xl bg-custom-darkGray/30 backdrop-blur-md
        border border-white/5 hover:border-custom-neonGreen/30 transition-all duration-300
        text-left min-h-[220px] group relative overflow-hidden
      "
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
        <div className="w-12 h-12 border-2 border-custom-neonGreen rounded-full rotate-45"></div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[10px] font-mono text-custom-neonGreen/40 uppercase tracking-[0.3em] mb-2 inline-block">Interest_Entry</span>
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-custom-neonGreen transition-colors orbitron uppercase tracking-tighter">
          {title}
        </h3>
        <p className="text-custom-mutedWhite/70 text-sm leading-relaxed font-light flex-1">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <div className="h-[2px] w-8 bg-custom-neonGreen/20 group-hover:w-full transition-all duration-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-custom-neonGreen/40 shrink-0"></div>
        </div>
      </div>
    </motion.div>
  );
}
