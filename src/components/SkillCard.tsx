
interface SkillCardProps {
    icon:string;
    text:string;
}

export default function SkillCard({icon, text}:SkillCardProps){
    return (
    <div className="bg-white/10 flex flex-row items-center space-x-4 justify-center border-b border-custom-neonGreen py-4 m-2 p-2">
      <img src={icon} alt="Skill icon" width={64} height={64} />
      <p className="text-custom-neonGreen-soft orbitron text-lg text-center">
        {text}
      </p>
    </div>
  );
}