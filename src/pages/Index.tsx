import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Инновационные решения для вашего бизнеса
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Мы предоставляем широкий спектр услуг в сфере промышленного производства и технологий
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/products">Наша продукция</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const advantages = [
  {
    title: "Качество",
    description: "Высокие стандарты производства и контроль качества на всех этапах",
    icon: "🏆",
  },
  {
    title: "Опыт",
    description: "Более 15 лет успешной работы на рынке промышленного производства",
    icon: "⚡",
  },
  {
    title: "Инновации",
    description: "Современное оборудование и передовые технологии производства",
    icon: "💡",
  },
];

export default Index;