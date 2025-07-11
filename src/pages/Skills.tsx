import NavBar from "../components/NavBar";
import SkillCard from "../components/SkillCard";

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
    <div className="border-2 border-custom-neonGreen min-h-screen">
      <NavBar />
      <div className="flex justify-center bg-custom-background">
        <main className="w-11/12 flex flex-col items-center pt-20  text-custom-neonGreen-soft orbitron p-4">
          {/* Languages */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 underline">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard icon={pythonIcon} text="Python is my main language. I use it for web apps, scripting, automation, and data manipulation." />
              <SkillCard icon={typescriptIcon} text="TypeScript improves my code quality. I use it with Angular and React for type safety and better tooling." />
              <SkillCard icon={javaIcon} text="Java was part of my academic foundation. I still use it when needed in enterprise environments." />
              <SkillCard icon={bashIcon} text="I use Bash scripting to automate repetitive tasks and streamline development workflows." />
              <SkillCard icon={htmlcssjsIcon} text="HTML, CSS, and JS form the core of every frontend app I build. I always keep the fundamentals strong." />
          </div>

          {/* Technologies */}
          <h2 className="text-xl md:text-3xl font-bold mt-12 mb-6 underline">Technologies & Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard icon={djangoIcon} text="Django is my go-to backend framework. I've used it extensively to build robust, scalable web applications." />
              <SkillCard icon={angularIcon} text="Angular is my main frontend framework. I’ve used it across multiple projects for building dynamic and maintainable UIs." />
              <SkillCard icon={reactIcon} text="I’ve used React to create lightweight SPAs and dashboards, especially when working outside Angular." />
              <SkillCard icon={postgresqlIcon} text="PostgreSQL is my preferred database. I’ve used it in almost all production-ready backend applications." />
              <SkillCard icon={redisIcon} text="Redis has been a key tool in my projects for caching, queuing, and improving performance." />
              <SkillCard icon={celeryIcon} text="I’ve integrated Celery with Django to manage background tasks, async workflows, and improve system responsiveness." />
              <SkillCard icon={springbootIcon} text="I’ve explored Spring Boot in Java-based backends and appreciated its convention-over-configuration approach." />
              <SkillCard icon={laravelIcon} text="I’ve used Laravel in a few freelance and academic projects. It’s elegant and developer-friendly." />
          </div>

          {/* Extras */}
          <h2 className="text-xl md:text-3xl font-bold mt-12 mb-6 underline">Extras & Familiar Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard icon={tailwindIcon} text="Tailwind CSS lets me build modern, responsive UIs fast and cleanly. I love its utility-first approach." />
              <SkillCard icon={dockerIcon} text="I containerize applications using Docker, making them portable and consistent across environments." />
              <SkillCard icon={linuxIcon} text="I'm very comfortable working in Linux environments for development, deployment, and automation tasks." />
              <SkillCard icon={bootstrapIcon} text="Bootstrap was my first CSS library. I still use it for quick prototypes and legacy projects." />
              <SkillCard icon={mariadbIcon} text="MariaDB has been a solid alternative to MySQL in some client projects I've worked on." />
              <SkillCard icon={jwtIcon} text="JWT is my go-to solution for authentication and securing APIs in modern web apps." />
          </div>
          {/* Interests */}
          <h2 className="text-xl md:text-3xl font-bold mt-12 mb-6 underline">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div>
              <h2 className="text-lg font-semibold">DevOps</h2>
              <p>
                I'm interested in streamlining development and deployment workflows. 
                I’ve worked with Docker, Bash scripting, Python automation, and basic CI/CD pipelines using GitHub Actions. 
                I’ve also experimented with hosting platforms like Railway and Vercel. I'm eager to deepen my understanding of DevOps tools and best practices.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Web3</h2>
              <p>
                I’ve developed simple smart contracts in Solidity and deployed them on testnets. Although I’m still learning, 
                I'm highly interested in the decentralized web, smart contracts, and blockchain infrastructure. I aim to explore more advanced
                concepts in Web3 development.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">IoT</h2>
              <p>
                Coming from a background where I explored industrial robotics,
                I’m passionate about IoT systems. I enjoy working with Arduino, Raspberry Pi, PLCs, LoRa, MQTT,
                and task automation for microcontrollers. I’m especially interested in remote monitoring and intelligent automation.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Microservices</h2>
              <p>
                I’m drawn to the modular architecture of microservices. 
                I like the idea of separating applications into independent components that communicate via MQTT, 
                Redis Pub/Sub, and other messaging protocols. I'm currently expanding my knowledge in distributed systems 
                and scalable architecture.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Artificial Intelligence</h2>
              <p>
                While I don’t train AI models, I’ve integrated various pre-trained models 
                into applications for tasks such as emotion analysis, computer vision, and Discord bot functionalities.
                I’m especially interested in making AI more accessible through real-world applications.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
