import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";
export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen orbitron">
      <NavBar />

      <main className="flex flex-col items-center px-6 pt-24 pb-16 md:px-20 space-y-12">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-bold text-custom-neonGreen mb-12 border-b-4 border-custom-neonGreen pb-3 neon-glow text-center">
        About Me
      </h1>

      {/* BIO */}
      <section className="max-w-3xl text-center space-y-6 text-custom-neonGreen-soft">
        <p>I'm a passionate full-stack developer focused on building scalable web applications. I enjoy automation, performance optimization, and tech innovation.</p>
        <p>I hold a vocational degree (FP DAM) in Multiplatform App Development with high marks and have completed specialized courses in cybersecurity, Python & data analysis, and web design.</p>
        <p>I also studied Industrial Robotics (FP Robótica Industrial), which sparked my ongoing interest in <span className="font-semibold text-custom-neonGreen">IoT, electronics, and embedded systems</span>.</p>
        <p>Trilingual: <span className="font-semibold text-custom-neonGreen">Spanish, English, and Czech</span>. Open to international and remote opportunities.</p>
        <p>Outside of tech, I enjoy playing guitar 🎸, cooking 🍳, and diving into hands-on creative projects.</p>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <AboutCard title="📚 Education & Certifications" delay={0}>
          <ul className="list-disc list-inside space-y-1">
            <li>FP DAM – Multiplatform App Development (High GPA)</li>
            <li>Factoria F5 – Cybersecurity Bootcamp</li>
            <li>Web Design & Publishing Certificate</li>
            <li>Python & Data Analysis – DataCamp</li>
          </ul>
        </AboutCard>

        <AboutCard title="🌐 Languages" delay={0.1}>
          <ul className="list-disc list-inside space-y-1">
            <li>Spanish – Native</li>
            <li>English – Fluent</li>
            <li>Czech – Fluent</li>
          </ul>
        </AboutCard>

        <AboutCard title="🎸 Hobbies & Interests" delay={0.2}>
          <p>Guitar, cooking, tinkering with electronics, learning new tech tools, and building projects for fun.</p>
        </AboutCard>
      </section>
    </main>

    </div>
  );
}
