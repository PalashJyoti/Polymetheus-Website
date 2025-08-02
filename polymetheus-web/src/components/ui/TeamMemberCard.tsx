interface TeamMemberCardProps {
  name: string;
  role: string;
  expertise: string;
  avatar: string;
}

export const TeamMemberCard = ({ name, role, expertise, avatar }: TeamMemberCardProps) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
      <div className="mb-6">
        <img 
          src={avatar} 
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-cyan-400 font-semibold mb-3">{role}</p>
      <p className="text-slate-400">{expertise}</p>
    </div>
  );
};