export default function TechnicalFooter() {
  const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-custom-darkGray/10 overflow-hidden">
      {/* Decorative Grid and Background effects */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-custom-neonGreen/5 blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-custom-mutedWhite/40 font-mono text-[10px] md:text-xs">
        {/* Module 1 - Stack Status */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-custom-neonGreen animate-pulse"></div>
            <span className="text-white hover:text-custom-neonGreen transition-colors cursor-pointer tracking-[0.2em] font-bold">SYSTEM_CORE.EXE</span>
          </div>
          <p className="leading-relaxed leading-widest">
            Portfolio v4.0.5 running on Vercel Edge Runtime. 
            Stack: React 19 / Vite / TS / Framer Motion / Tailwind.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
             <span className="px-1.5 py-0.5 border border-white/5 rounded">NODE.js v20+</span>
             <span className="px-1.5 py-0.5 border border-white/5 rounded">VITE-ENV_PROD</span>
          </div>
        </div>

        {/* Module 2 - Location & Time */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
          <div className="uppercase tracking-[0.3em] font-bold border-b border-white/10 pb-1 mb-2">Geolocation_Data</div>
          <div className="flex flex-col gap-1">
             <div className="flex gap-4">
                <span className="w-12">LOC_ID:</span>
                <span className="text-custom-cyberBlue">Spain - EU/AST</span>
             </div>
             <div className="flex gap-4">
                <span className="w-12">TZ_OFFSET:</span>
                <span>UTC +01:00</span>
             </div>
             <div className="flex gap-4 pt-2">
                <span className="w-12">SYSTIME:</span>
                <span className="animate-pulse">{currentTimestamp}</span>
             </div>
          </div>
        </div>

        {/* Module 3 - Links & Contact */}
        <div className="md:col-span-4 flex flex-col md:items-end space-y-6">
           <div className="space-y-3 text-right">
              <div className="uppercase tracking-[0.3em] font-bold text-white mb-4">Central_Command</div>
              <div className="flex flex-col gap-2 items-end">
                <a href="#home" className="hover:text-custom-neonGreen transition-all flex items-center gap-2 group">
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity">{" >> "}</span> HOME_PAGE
                </a>
                <a href="#projects" className="hover:text-custom-neonGreen transition-all flex items-center gap-2 group">
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity">{" >> "}</span> PROJECT_EXP.SCAN
                </a>
                <a href="mailto:lucawali21@gmail.com" className="hover:text-custom-neonGreen transition-all flex items-center gap-2 group underline decoration-custom-neonGreen/20">
                   <span className="opacity-0 group-hover:opacity-100 transition-opacity">{" >> "}</span> DIRECT_AUTH.MAIL
                </a>
              </div>
           </div>
           
           {/* Copyright / Auth code */}
           <div className="pt-6 border-t border-white/5 text-right opacity-30">
              © LW_SYSTEMS_2026. AUTHORIZED_ACCESS_ONLY. 
           </div>
        </div>
      </div>

      {/* Aesthetic base bar */}
      <div className="mt-8 flex items-center justify-between opacity-10 font-mono text-[8px] uppercase tracking-widest px-6 italic">
          <span>Processing encrypted packets... </span>
          <span>Matrix_Stability: 99.4%</span>
      </div>
    </footer>
  );
}
