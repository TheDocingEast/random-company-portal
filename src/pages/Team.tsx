import TeamMemberCard from "@/components/TeamMemberCard";

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Наша команда</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const team = [
  {
    name: "Александр Иванов",
    position: "Генеральный директор",
    image: "/placeholder.svg",
  },
  {
    name: "Елена Петрова",
    position: "Технический директор",
    image: "/placeholder.svg",
  },
  {
    name: "Михаил Сидоров",
    position: "Главный инженер",
    image: "/placeholder.svg",
  },
  {
    name: "Анна Козлова",
    position: "Руководитель отдела продаж",
    image: "/placeholder.svg",
  },
  {
    name: "Дмитрий Соколов",
    position: "Начальник производства",
    image: "/placeholder.svg",
  },
  {
    name: "Ольга Морозова",
    position: "Финансовый директор",
    image: "/placeholder.svg",
  },
];

export default Team;