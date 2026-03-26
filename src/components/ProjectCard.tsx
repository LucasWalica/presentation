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
      className="
        group relative cursor-pointer border border-white/5 rounded-2xl 
        bg-custom-darkGray/20 backdrop-blur-xl p-8 flex flex-col gap-6 
        hover:border-custom-neonGreen/30 transition-all duration-500
        h-full min-h-[340px] overflow-hidden
      "
    >
      {/* Decorative Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-custom-neonGreen/5 rounded-bl-full pointer-events-none group-hover:bg-custom-neonGreen/10 transition-colors"></div>
      
      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Header Area */}
        <div className="flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-custom-neonGreen transition-colors orbitron uppercase leading-tight">
            {title}
          </h2>
          <div className="w-10 h-[2px] bg-custom-neonGreen/20 mt-2 group-hover:w-full transition-all duration-700"></div>
        </div>

        {/* Content Area */}
        <p className="text-custom-mutedWhite/70 text-sm flex-1 leading-relaxed line-clamp-3 font-light">
          {description}
        </p>

        {/* Tech Area */}
        <div className="flex flex-wrap gap-1.5 mt-auto flex-shrink-0 pb-4">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="
                text-[9px] px-2 py-0.5 rounded
                bg-white/5 text-custom-mutedWhite/40
                border border-white/5 uppercase font-mono tracking-tighter
                group-hover:border-custom-neonGreen/20 group-hover:text-custom-neonGreen/60 transition-colors
              "
            >
              {t}
            </span>
          ))}
          {tech.length > 4 && <span className="text-[9px] text-white/20 pt-1">+{tech.length - 4}</span>}
        </div>

        {/* Footer Area */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-custom-neonGreen/40 font-mono tracking-widest uppercase">sys_entry.00{Math.floor(Math.random() * 9)}</span>
          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
            <span className="text-[10px] font-bold text-custom-neonGreen uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Access</span>
            <svg className="w-4 h-4 text-custom-neonGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Background Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-custom-neonGreen/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </motion.div>
  );
}
