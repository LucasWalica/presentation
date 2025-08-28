import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen orbitron">
      <NavBar />

      <main className="flex flex-col items-center px-6 pt-24 pb-16 md:px-20">
        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-bold text-custom-neonGreen mb-12 border-b-4 border-custom-neonGreen pb-3 neon-glow">
          About Me
        </h1>

        {/* BIO */}
        <section className="max-w-3xl text-center mb-12 space-y-6">
          <p className="text-lg md:text-xl text-custom-neonGreen-soft leading-relaxed">
            I'm a passionate full-stack developer focused on building scalable web applications. I enjoy automation, performance optimization, and tech innovation.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            I hold a vocational degree (FP DAM) in Multiplatform App Development with high marks and have completed specialized courses in cybersecurity, Python & data analysis, and web design.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            I also studied Industrial Robotics (FP Robótica Industrial), which sparked my ongoing interest in <span className="font-semibold">IoT, electronics, and embedded systems</span>.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            Trilingual: <span className="font-semibold">Spanish, English, and Czech</span>. Open to international and remote opportunities.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            Outside of tech, I enjoy playing guitar 🎸, cooking 🍳, and diving into hands-on creative projects.
          </p>
        </section>

        {/* CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-custom-softGray to-custom-background text-custom-neonGreen"
          >
            <h2 className="text-xl font-bold mb-2">📚 Education & Certifications</h2>
            <ul className="list-disc list-inside">
              <li>FP DAM – Multiplatform App Development (High GPA)</li>
              <li>Factoria F5 – Cybersecurity Bootcamp</li>
              <li>Web Design & Publishing Certificate</li>
              <li>Python & Data Analysis – DataCamp</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-custom-softGray to-custom-background text-custom-neonGreen"
          >
            <h2 className="text-xl font-bold mb-2">🌐 Languages</h2>
            <ul className="list-disc list-inside">
              <li>Spanish – Native</li>
              <li>English – Fluent</li>
              <li>Czech – Fluent</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-gradient-to-r from-custom-softGray to-custom-background text-custom-neonGreen"
          >
            <h2 className="text-xl font-bold mb-2">🎸 Hobbies & Interests</h2>
            <p>Guitar, cooking, tinkering with electronics, learning new tech tools, and building projects for fun.</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
