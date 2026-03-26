import { motion } from 'framer-motion'
import AboutCard from './AboutCard'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-custom-cyberBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-custom-neonGreen/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-custom-neonGreen mb-4 border-b-4 border-custom-neonGreen pb-3 inline-block neon-glow">
            About Me
          </h2>
          <p className="text-lg text-custom-neonGreen-soft mt-4 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Bio Section - Refined Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-custom-darkGray/20 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl overflow-hidden group hover:border-custom-neonGreen/20 transition-colors duration-500">
            {/* Minimalist Header */}
            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/40 transition-colors duration-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/40 transition-colors duration-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/40 transition-colors duration-500"></div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-custom-mutedWhite/30 font-mono">user_bio.sys</div>
              <div className="w-12"></div>
            </div>
            
            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white font-light leading-snug">
                  I'm a <span className="text-custom-neonGreen font-semibold">Full Stack Developer</span> with over <span className="text-custom-neonGreen font-semibold">4 years</span> of experience building scalable applications.
                </p>
                <div className="h-[1px] w-20 bg-custom-neonGreen/30"></div>
                <p className="text-custom-mutedWhite/80 leading-relaxed max-w-2xl">
                  Expertise in <span className="text-white">Django, .NET, and Java</span> backends, along with modern frontend frameworks and <span className="text-white">Docker</span> containerization.
                </p>
                <p className="text-custom-mutedWhite/80 leading-relaxed">
                  Trilingual (ES/EN/CZ) and always eager to learn, I specialize in building robust solutions that bridge the gap between complex logic and clean user interfaces.
                </p>
              </div>

              {/* Minimalist Tech Tags */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white/5">
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-custom-neonGreen rounded-full"></span>
                  <span className="text-xs uppercase tracking-wider text-custom-mutedWhite/50">TypeScript & React</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-custom-cyberBlue rounded-full"></span>
                  <span className="text-xs uppercase tracking-wider text-custom-mutedWhite/50">Python & .NET</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-custom-electricPurple rounded-full"></span>
                  <span className="text-xs uppercase tracking-wider text-custom-mutedWhite/50">Java & Spring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-custom-acidYellow rounded-full"></span>
                  <span className="text-xs uppercase tracking-wider text-custom-mutedWhite/50">Docker & DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Cards - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
        >
          <AboutCard title="Academic Data" delay={0}>
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">FP Multiplatform Dev</p>
                <p className="text-xs text-custom-mutedWhite/60 tracking-wide uppercase">DAM Graduate</p>
              </div>
              <div className="pt-2 border-t border-white/5 mt-2">
                <p className="text-[11px] text-custom-neonGreen/60 font-mono tracking-tighter uppercase">• Cybersecurity bootcamp</p>
                <p className="text-[11px] text-custom-neonGreen/60 font-mono tracking-tighter uppercase">• Python & Data analysis</p>
                <p className="text-[11px] text-custom-neonGreen/60 font-mono tracking-tighter uppercase">• Automation & IoT Enthusiast</p>
              </div>
            </div>
          </AboutCard>

          <AboutCard title="Language Interface" delay={0.1}>
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-custom-mutedWhite/80">Spanish</span>
                  <span className="text-[10px] text-custom-neonGreen/60 uppercase">Native</span>
                </div>
                <div className="h-[2px] bg-white/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} className="h-full bg-custom-neonGreen/40"></motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-custom-mutedWhite/80">English</span>
                  <span className="text-[10px] text-custom-neonGreen/60 uppercase">C1 Fluent</span>
                </div>
                <div className="h-[2px] bg-white/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} className="h-full bg-custom-neonGreen/40"></motion.div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-custom-mutedWhite/80">Czech</span>
                  <span className="text-[10px] text-custom-neonGreen/60 uppercase">B2 Fluent</span>
                </div>
                <div className="h-[2px] bg-white/5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-custom-neonGreen/40"></motion.div>
                </div>
              </div>
            </div>
          </AboutCard>

          <AboutCard title="Core Objectives" delay={0.2}>
            <div className="space-y-4 pt-2">
              <p className="text-sm text-custom-mutedWhite/80 italic leading-relaxed">
                "Crafting efficient digital architectures with a focus on deep logic and intuitive user experiences."
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-custom-mutedWhite/40 uppercase tracking-wider">Backend API</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-custom-mutedWhite/40 uppercase tracking-wider">Automation</span>
                <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-custom-mutedWhite/40 uppercase tracking-wider">IoT Systems</span>
              </div>
            </div>
          </AboutCard>
        </motion.div>

        {/* Values - Streamlined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-custom-darkGray/10 border border-white/5 rounded-3xl p-12 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <div className="text-2xl opacity-60">🚀</div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-custom-neonGreen">Innovation</h4>
              <p className="text-xs text-custom-mutedWhite/60 leading-relaxed">Pionering creative solutions through modern stacks.</p>
            </div>
            <div className="text-center space-y-4 border-x border-white/5 px-4">
              <div className="text-2xl opacity-60">💡</div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-custom-cyberBlue">Adaptability</h4>
              <p className="text-xs text-custom-mutedWhite/60 leading-relaxed">Evolving alongside the industry landscape.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-2xl opacity-60">🤝</div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-custom-electricPurple">Colaboration</h4>
              <p className="text-xs text-custom-mutedWhite/60 leading-relaxed">Building great things through teamwork.</p>
            </div>
          </div>
        </motion.div>

        {/* Interests Section - New Interactive Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-custom-mutedWhite/30 font-mono">System_Interests.log</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Interest 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center group hover:border-custom-neonGreen/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-custom-neonGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform">🎸</div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-custom-mutedWhite/60 group-hover:text-custom-neonGreen transition-colors relative z-10">Music & Guitar</h5>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-custom-neonGreen w-[85%]"></div>
              </div>
            </motion.div>

            {/* Interest 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center group hover:border-custom-cyberBlue/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-custom-cyberBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform">🍳</div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-custom-mutedWhite/60 group-hover:text-custom-cyberBlue transition-colors relative z-10">Gastronomy</h5>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-custom-cyberBlue w-[75%]"></div>
              </div>
            </motion.div>

            {/* Interest 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center group hover:border-custom-electricPurple/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-custom-electricPurple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform">⚙️</div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-custom-mutedWhite/60 group-hover:text-custom-electricPurple transition-colors relative z-10">Electronics</h5>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-custom-electricPurple w-[60%]"></div>
              </div>
            </motion.div>

            {/* Interest 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center group hover:border-custom-acidYellow/30 transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-custom-acidYellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-3xl mb-3 relative z-10 group-hover:scale-110 transition-transform">📚</div>
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-custom-mutedWhite/60 group-hover:text-custom-acidYellow transition-colors relative z-10">Lifelong study</h5>
              <div className="mt-4 h-1 w-full bg-white/5 rounded-full relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-custom-acidYellow w-[100%]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
