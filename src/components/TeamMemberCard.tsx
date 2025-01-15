import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
  return (
    <Card className="card-hover text-center">
      <CardHeader>
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto object-cover" />
      </CardHeader>
      <CardContent>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;