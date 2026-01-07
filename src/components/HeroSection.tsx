import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadCV = () => {
    setIsDownloading(true)
    // Simulate download delay for better UX
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/CV_Lucas_Walica.pdf'
      link.download = 'CV_Lucas_Walica.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setIsDownloading(false)
    }, 500)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-safe">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-neonGreen/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-custom-cyberBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.p 
              className="text-custom-neonGreen-soft text-lg md:text-xl mb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              👋 Welcome! I'm
            </motion.p>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-custom-neonGreen to-custom-cyberBlue mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-custom-neonGreen via-custom-cyberBlue to-custom-neonGreen bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-2xl leading-tight"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            Lucas Walica
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-custom-neonGreen-soft mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-custom-mutedWhite mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Passionate about building scalable web applications, automation, and innovative tech solutions. 
            Trilingual developer with expertise in Django, Angular, React, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* Download CV Button */}
            <motion.button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="
                relative px-8 py-4 bg-custom-neonGreen text-custom-background 
                font-bold rounded-lg border-2 border-custom-neonGreen
                hover:bg-custom-background hover:text-custom-neonGreen
                transition-all duration-300 transform hover:scale-105
                shadow-lg shadow-custom-neonGreen/30
                disabled:opacity-50 disabled:cursor-not-allowed
                overflow-hidden group
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-custom-neonGreen to-custom-cyberBlue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>

            {/* View Projects Button */}
            <motion.a
              href="#projects"
              className="
                px-8 py-4 bg-transparent text-custom-neonGreen 
                font-bold rounded-lg border-2 border-custom-neonGreen
                hover:bg-custom-neonGreen hover:text-custom-background
                transition-all duration-300 transform hover:scale-105
                shadow-lg shadow-custom-neonGreen/30
              "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-custom-neonGreen/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-custom-neonGreen mb-2">2+</div>
              <div className="text-sm text-custom-mutedWhite">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-custom-neonGreen mb-2">10+</div>
              <div className="text-sm text-custom-mutedWhite">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-custom-neonGreen mb-2">3</div>
              <div className="text-sm text-custom-mutedWhite">Languages</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-custom-neonGreen-soft text-center m-16 lg:m-12 xl:m-10"
        >
          <div className="text-sm mb-2">Scroll Down</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
