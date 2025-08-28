import NavBar from "../components/NavBar";
import SkillCard from "../components/SkillCard";
import InterestCard from "../components/InterestCard";
// Import icons
import angularIcon from "../assets/angular.png";
import bashIcon from "../assets/bash.webp";
import bootstrapIcon from "../assets/bootstrap.png";
import celeryIcon from "../assets/celery.png";
import djangoIcon from "../assets/django.svg";
import dockerIcon from "../assets/docker.webp";
import htmlcssjsIcon from "../assets/htmlcssjs.png";
import javaIcon from "../assets/javaicon.svg";
import jwtIcon from "../assets/JWTIcon.png";
import laravelIcon from "../assets/laravel.svg";
import linuxIcon from "../assets/linux.png";
import mariadbIcon from "../assets/mariadb.png";
import postgresqlIcon from "../assets/postgresql.webp";
import pythonIcon from "../assets/python icon.webp";
import reactIcon from "../assets/react.png";
import redisIcon from "../assets/redis.png";
import springbootIcon from "../assets/springboot.png";
import tailwindIcon from "../assets/tailwind.svg";
import typescriptIcon from "../assets/typescript.png";

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-custom-background orbitron text-custom-neonGreen">
      <NavBar />
      <main className="w-11/12 mx-auto flex flex-col items-center space-y-12">

        {/* Languages */}
        <h2 className="text-2xl md:text-4xl font-bold underline neon-glow pt-28">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={pythonIcon} text="Python is my main language for web apps, scripting, automation, and data manipulation." />
          <SkillCard icon={typescriptIcon} text="TypeScript improves code quality and tooling in Angular and React projects." />
          <SkillCard icon={javaIcon} text="Java was part of my academic foundation, still used in enterprise environments." />
          <SkillCard icon={bashIcon} text="Bash scripting to automate tasks and streamline development workflows." />
          <SkillCard icon={htmlcssjsIcon} text="HTML, CSS, and JS are the core of every frontend app I build." />
        </div>

        {/* Technologies & Frameworks */}
        <h2 className="text-2xl md:text-4xl font-bold underline neon-glow">Technologies & Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={djangoIcon} text="Django for robust, scalable backend applications." />
          <SkillCard icon={angularIcon} text="Angular for dynamic, maintainable frontends." />
          <SkillCard icon={reactIcon} text="React for lightweight SPAs and dashboards." />
          <SkillCard icon={postgresqlIcon} text="PostgreSQL for almost all production-ready backend apps." />
          <SkillCard icon={redisIcon} text="Redis for caching, queuing, and performance improvements." />
          <SkillCard icon={celeryIcon} text="Celery integrated with Django for async background tasks." />
          <SkillCard icon={springbootIcon} text="Spring Boot in Java backends, convention-over-configuration approach." />
          <SkillCard icon={laravelIcon} text="Laravel for elegant and developer-friendly PHP projects." />
        </div>

        {/* Extras & Tools */}
        <h2 className="text-2xl md:text-4xl font-bold underline neon-glow">Extras & Familiar Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={tailwindIcon} text="Tailwind CSS for modern, responsive UI development." />
          <SkillCard icon={dockerIcon} text="Docker for containerization and consistent environments." />
          <SkillCard icon={linuxIcon} text="Comfortable in Linux environments for dev, deployment, and automation." />
          <SkillCard icon={bootstrapIcon} text="Bootstrap for quick prototypes and legacy projects." />
          <SkillCard icon={mariadbIcon} text="MariaDB/MySQL in client projects." />
          <SkillCard icon={jwtIcon} text="JWT for authentication and secure APIs." />
        </div>

        {/* Interests */}
        <h2 className="text-2xl md:text-4xl font-bold underline neon-glow">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 pb-20">
          <InterestCard title="DevOps" description="Streamlining development and deployment workflows with Docker, Bash, Python automation, CI/CD, and platforms like Railway and Vercel." />
          <InterestCard title="Web3" description="Exploring smart contracts, Solidity, and decentralized web concepts." />
          <InterestCard title="IoT" description="Working with Arduino, Raspberry Pi, PLCs, LoRa, MQTT, and remote automation." />
          <InterestCard title="Microservices" description="Designing modular applications communicating via MQTT, Redis Pub/Sub, and scalable architectures." />
          <InterestCard title="Artificial Intelligence" description="Integrating pre-trained models for emotion analysis, computer vision, and Discord bot functionalities." />
        </div>

      </main>
    </div>
  );
}
