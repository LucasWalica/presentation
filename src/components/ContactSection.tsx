import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-custom-cyberBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-custom-neonGreen/10 rounded-full blur-3xl"></div>
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
            Get In Touch
          </h2>
          <p className="text-lg text-custom-neonGreen-soft max-w-2xl mx-auto">
            Feel free to reach out for collaborations, work opportunities, or just to say hi!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-custom-softGray/30 backdrop-blur-sm border border-custom-neonGreen/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-custom-neonGreen mb-6">Let's Connect</h3>
              <p className="text-custom-neonGreen-soft mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology. Don't hesitate to reach out!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-custom-darkGray/30 rounded-lg border border-custom-neonGreen/10 hover:border-custom-neonGreen/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-custom-neonGreen/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-custom-neonGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-custom-neonGreen-soft">Email</p>
                    <a href="mailto:lucawali21@gmail.com" className="text-custom-neonGreen hover:text-white transition-colors">
                      lucawali21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-custom-darkGray/30 rounded-lg border border-custom-neonGreen/10 hover:border-custom-neonGreen/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-custom-neonGreen/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-custom-neonGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-custom-neonGreen-soft">Phone</p>
                    <a href="tel:+34677367124" className="text-custom-neonGreen hover:text-white transition-colors">
                      +34 677 367 124
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-custom-darkGray/30 rounded-lg border border-custom-neonGreen/10 hover:border-custom-neonGreen/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-custom-neonGreen/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-custom-neonGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-custom-neonGreen-soft">Location</p>
                    <p className="text-custom-neonGreen">Spain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-custom-softGray/30 backdrop-blur-sm border border-custom-neonGreen/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-custom-neonGreen mb-4">Find Me Online</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/LucasWalica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-custom-neonGreen/20 rounded-full flex items-center justify-center hover:bg-custom-neonGreen/30 transition-colors"
                >
                  <svg className="w-6 h-6 text-custom-neonGreen" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-custom-neonGreen/20 rounded-full flex items-center justify-center hover:bg-custom-neonGreen/30 transition-colors"
                >
                  <svg className="w-6 h-6 text-custom-neonGreen" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-custom-softGray/30 backdrop-blur-sm border border-custom-neonGreen/20 rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-custom-neonGreen mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-custom-darkGray/50 border border-custom-neonGreen/30 focus:border-custom-neonGreen focus:outline-none focus:ring-2 focus:ring-custom-neonGreen/20 text-custom-neonGreen placeholder-custom-neonGreen/50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-custom-neonGreen mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-custom-darkGray/50 border border-custom-neonGreen/30 focus:border-custom-neonGreen focus:outline-none focus:ring-2 focus:ring-custom-neonGreen/20 text-custom-neonGreen placeholder-custom-neonGreen/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-custom-neonGreen mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg bg-custom-darkGray/50 border border-custom-neonGreen/30 focus:border-custom-neonGreen focus:outline-none focus:ring-2 focus:ring-custom-neonGreen/20 text-custom-neonGreen placeholder-custom-neonGreen/50 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 px-6 bg-custom-neonGreen text-custom-background 
                  font-bold rounded-lg border-2 border-custom-neonGreen
                  hover:bg-transparent hover:text-custom-neonGreen
                  transition-all duration-300 transform hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed
                  disabled:transform-none
                "
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
