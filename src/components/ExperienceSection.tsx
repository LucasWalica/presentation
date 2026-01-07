import { motion } from 'framer-motion'
import { useState } from 'react'

const experiences = [
  {
    title: "Sole Lead Developer",
    company: "Fundación Princesa de Asturias",
    period: "Aug 2025 - Nov 2025",
    type: "Full-time",
    description: "Architected and maintained a critical, high-volume data ecosystem as the sole engineer, processing millions of records with real-time updates.",
    achievements: [
      "Built complex ETL pipelines to synchronize disparate external platforms (Airtable, Koobin, Acumbamail)",
      "Integrated third-party APIs (Zendesk, Hugging Face) for enhanced functionality",
      "Implemented Grafana dashboards for real-time system monitoring and business intelligence",
      "Managed RedHat infrastructure with Django, Celery, and Redis"
    ],
    technologies: ["Django", "Celery", "Redis", "PostgreSQL", "Grafana", "RedHat"],
    icon: "🚀"
  },
  {
    title: "Full Stack Developer Internship",
    company: "Capgemini",
    period: "Mar 2025 - Jun 2025",
    type: "Internship",
    description: "Collaborated in an Agile/Scrum team to develop secure internal enterprise applications using Java and Angular.",
    achievements: [
      "Developed enterprise applications using Spring Boot and Spring Security",
      "Built responsive frontends with Angular Material components",
      "Ensured code quality through peer reviews and corporate standards",
      "Managed data using PostgreSQL and H2 databases"
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "Angular", "Angular Material", "PostgreSQL", "H2"],
    icon: "🏢"
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2 Years",
    type: "Freelance",
    description: "Delivered end-to-end web solutions for SMEs, managing the entire lifecycle from client requirements to deployment.",
    achievements: [
      "Managed complete project lifecycle: requirements gathering, budgeting, development, deployment",
      "Created value-driven, user-friendly interfaces for diverse client needs",
      "Deployed robust solutions to VPS and cloud platforms (Vercel, Railway)",
      "Maintained long-term client relationships through quality deliverables"
    ],
    technologies: ["Django", "React", "Angular", "PostgreSQL", "Docker", "Vercel", "Railway"],
    icon: "💼"
  }
]

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-custom-electricPurple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-custom-acidYellow/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-custom-neonGreen mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-custom-neonGreen-soft max-w-2xl mx-auto">
            My journey through different roles, technologies, and challenges
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-custom-neonGreen via-custom-cyberBlue to-custom-electricPurple hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-custom-neonGreen rounded-full border-4 border-custom-background hidden md:block"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
                  className="
                    bg-custom-softGray/50 backdrop-blur-sm border border-custom-neonGreen/30 
                    rounded-xl p-6 cursor-pointer transition-all duration-300
                    hover:bg-custom-softGray/70 hover:border-custom-neonGreen/60
                    hover:shadow-lg hover:shadow-custom-neonGreen/20
                    relative overflow-hidden group
                  "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-neonGreen/5 to-custom-cyberBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{exp.icon}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-custom-neonGreen">
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-lg text-custom-cyberBlue font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-custom-neonGreen/20 text-custom-neonGreen text-xs rounded-full border border-custom-neonGreen/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-3 text-custom-neonGreen-soft">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-custom-mutedWhite mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expanded Content */}
                    {selectedExperience === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-custom-neonGreen/20 pt-4 mt-4"
                      >
                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-custom-neonGreen mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-custom-mutedWhite flex items-start gap-2">
                                <span className="text-custom-neonGreen mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-custom-neonGreen mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-custom-darkGray/50 text-custom-neonGreen-soft text-xs rounded border border-custom-neonGreen/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Expand indicator */}
                    <div className="flex items-center justify-center mt-3 text-custom-neonGreen-soft text-sm">
                      <span>{selectedExperience === index ? 'Click to collapse' : 'Click to expand'}</span>
                      <svg 
                        className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${selectedExperience === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
