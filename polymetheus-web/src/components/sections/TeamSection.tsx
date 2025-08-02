import { TeamMemberCard } from '../ui/TeamMemberCard';

export const TeamSection = () => {
  const team = [
    {
      name: "Palash Goswami",
      role: "Co-Founder & Developer",
      expertise: "",
      avatar: "/palash.jpeg"
    },
    {
      name: "Md Sakir Ahmed",
      role: "Co-Founder & Developer",
      expertise: "",
      avatar: "/sakir.jpeg"
    },
    {
      name: "Dr. Debajit Sarma",
      role: "Chief Advisor",
      expertise: "",
      avatar: "debajit.jpeg"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The brilliant minds behind Polymetheus, united by passion for innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              expertise={member.expertise}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};