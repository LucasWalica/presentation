
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string[];
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className="bg-custom-softGray p-6 rounded-xl shadow-lg hover:shadow-custom-neonGreen transition">
      <h2 className="text-2xl font-bold mb-2 orbitron text-custom-darkGray rounded-md bg-custom-neonGreen-deep p-2 text-center">{title}</h2>
      <p className="text-custom-neonGreen-soft mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <span key={t} className="text-sm px-2 py-1 bg-custom-darkGray rounded text-custom-neonGreen">
            {t}
          </span>
        ))}
      </div>
     <div className="flex flex-col space-y-2">
        {link.length > 1 ? (
            <>
            <a
                href={link[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
            >
                View Frontend Code
            </a>
            <a
                href={link[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
            >
                View Backend Code
            </a>
            </>
        ) : (
            <a
            href={link[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
            >
            View Source Code
            </a>
        )}
    </div>

    </div>
  );
}
