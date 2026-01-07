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

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-custom-softGray/30 backdrop-blur-sm border border-custom-neonGreen/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-custom-neonGreen/5 to-custom-cyberBlue/5 opacity-50"></div>
            
            <div className="relative z-10 text-center space-y-6">
              <p className="text-lg text-custom-neonGreen-soft leading-relaxed">
                I'm a passionate <span className="font-semibold text-custom-neonGreen">full-stack developer</span> focused on building scalable web applications. I enjoy automation, performance optimization, and tech innovation.
              </p>
              
              <p className="text-lg text-custom-neonGreen-soft leading-relaxed">
                I hold a vocational degree (FP DAM) in Multiplatform App Development with high marks and have completed specialized courses in cybersecurity, Python & data analysis, and web design.
              </p>
              
              <p className="text-lg text-custom-neonGreen-soft leading-relaxed">
                I also studied Industrial Robotics (FP Robótica Industrial), which sparked my ongoing interest in <span className="font-semibold text-custom-neonGreen">IoT, electronics, and embedded systems</span>.
              </p>
              
              <p className="text-lg text-custom-neonGreen-soft leading-relaxed">
                Trilingual: <span className="font-semibold text-custom-neonGreen">Spanish, English, and Czech</span>. Open to international and remote opportunities.
              </p>
              
              <p className="text-lg text-custom-neonGreen-soft leading-relaxed">
                Outside of tech, I enjoy playing guitar 🎸, cooking 🍳, and diving into hands-on creative projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <AboutCard 
            title="📚 Education & Certifications" 
            delay={0}
          >
            <ul className="list-disc list-inside space-y-2 text-custom-neonGreen-soft">
              <li>FP DAM – Multiplatform App Development (High GPA)</li>
              <li>Factoria F5 – Cybersecurity Bootcamp</li>
              <li>Web Design & Publishing Certificate</li>
              <li>Python & Data Analysis – DataCamp</li>
            </ul>
          </AboutCard>

          <AboutCard 
            title="🌐 Languages" 
            delay={0.1}
          >
            <ul className="list-disc list-inside space-y-2 text-custom-neonGreen-soft">
              <li>Spanish – Native</li>
              <li>English – Fluent</li>
              <li>Czech – Fluent</li>
            </ul>
          </AboutCard>

          <AboutCard 
            title="🎸 Hobbies & Interests" 
            delay={0.2}
          >
            <p className="text-custom-neonGreen-soft">
              Guitar, cooking, tinkering with electronics, learning new tech tools, and building projects for fun.
            </p>
          </AboutCard>
        </motion.div>

        {/* Personal Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-custom-neonGreen mb-8">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-custom-softGray/20 backdrop-blur-sm border border-custom-neonGreen/20 rounded-xl p-6 hover:border-custom-neonGreen/40 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold text-custom-neonGreen mb-2">Innovation</h4>
              <p className="text-sm text-custom-neonGreen-soft">
                Always exploring new technologies and creative solutions to complex problems
              </p>
            </div>
            <div className="bg-custom-softGray/20 backdrop-blur-sm border border-custom-neonGreen/20 rounded-xl p-6 hover:border-custom-neonGreen/40 transition-all duration-300">
              <div className="text-3xl mb-4">💡</div>
              <h4 className="text-lg font-semibold text-custom-neonGreen mb-2">Continuous Learning</h4>
              <p className="text-sm text-custom-neonGreen-soft">
                Committed to staying updated with the latest industry trends and best practices
              </p>
            </div>
            <div className="bg-custom-softGray/20 backdrop-blur-sm border border-custom-neonGreen/20 rounded-xl p-6 hover:border-custom-neonGreen/40 transition-all duration-300">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-semibold text-custom-neonGreen mb-2">Collaboration</h4>
              <p className="text-sm text-custom-neonGreen-soft">
                Believing in the power of teamwork and effective communication
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
