import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;