import NavBar from "../components/NavBar";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen orbitron">
      <NavBar />

      <main className="flex flex-col items-center px-6 pt-24 pb-16 md:px-20">
        <h1 className="text-4xl font-bold text-custom-neonGreen mb-8 border-b-2 border-custom-neonGreen pb-2">
          About Me
        </h1>

        <section className="max-w-3xl text-center mb-12 space-y-6">
          <p className="text-lg md:text-xl text-custom-neonGreen-soft leading-relaxed">
            I'm a passionate full-stack developer focused on building scalable web applications. My core stack revolves around 
            <span className="text-custom-neonGreen font-semibold"> Django</span>, 
            <span className="text-custom-neonGreen font-semibold"> Angular</span> and 
            <span className="text-custom-neonGreen font-semibold"> PostgreSQL</span>, 
            and I have a strong interest in automation, performance optimization, and tech innovation.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            I hold a vocational degree (FP DAM) in Multiplatform App Development with high marks, and I’ve completed several specialized courses including:
          </p>
          <ul className="list-disc list-inside text-custom-neonGreen-soft text-left">
            <li>Cybersecurity Bootcamp by <span className="font-semibold">Factoria F5</span></li>
            <li>Python and Data Analysis on <span className="font-semibold">DataCamp</span></li>
            <li>Certified course in Web Design and Publishing</li>
          </ul>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            I also studied Industrial Robotics (FP Robótica Industrial), which sparked my ongoing interest in <span className="font-semibold">IoT, electronics, and embedded systems</span>.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            I’m trilingual — fluent in <span className="font-semibold">Spanish, English, and Czech</span>. I’m always open to international and remote opportunities.
          </p>

          <p className="text-base md:text-lg text-custom-neonGreen-soft">
            Outside of tech, I enjoy playing guitar 🎸, cooking 🍳, and diving into hands-on creative projects.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md bg-custom-softGray text-custom-neonGreen">
            <h2 className="text-xl font-bold mb-2">📚 Education & Certifications</h2>
            <ul className="list-disc list-inside">
              <li>FP DAM – Multiplatform App Development (High GPA)</li>
              <li>Factoria F5 – Cybersecurity Bootcamp</li>
              <li>Web Design & Publishing Certificate</li>
              <li>Python & Data Analysis – DataCamp</li>
            </ul>
          </div>
          <div className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md bg-custom-softGray text-custom-neonGreen">
            <h2 className="text-xl font-bold mb-2">🛠️ Tech Interests</h2>
            <p>Full-stack dev (Django + Angular), automation, DevOps, IoT, robotics, embedded systems and data analysis.</p>
          </div>
          <div className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md bg-custom-softGray text-custom-neonGreen">
            <h2 className="text-xl font-bold mb-2">🌐 Languages</h2>
            <ul className="list-disc list-inside">
              <li>Spanish – Native</li>
              <li>English – Fluent</li>
              <li>Czech – Fluent</li>
            </ul>
          </div>
          <div className="border-2 border-custom-neonGreen p-6 rounded-xl shadow-md bg-custom-softGray text-custom-neonGreen">
            <h2 className="text-xl font-bold mb-2">🎸 Hobbies & More</h2>
            <p>Music (guitar), cooking, tinkering with electronics, learning new tech tools and building stuff for fun.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
