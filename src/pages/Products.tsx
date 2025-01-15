import ProductCard from "@/components/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Наша продукция</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    title: "Промышленные станки",
    description: "Высокоточное оборудование для металлообработки",
    image: "/placeholder.svg",
  },
  {
    title: "Автоматизированные линии",
    description: "Комплексные решения для производственных линий",
    image: "/placeholder.svg",
  },
  {
    title: "Конвейерные системы",
    description: "Современные системы транспортировки материалов",
    image: "/placeholder.svg",
  },
  {
    title: "Роботизированные комплексы",
    description: "Автоматизация производственных процессов",
    image: "/placeholder.svg",
  },
  {
    title: "Измерительное оборудование",
    description: "Точные приборы для контроля качества",
    image: "/placeholder.svg",
  },
  {
    title: "Программное обеспечение",
    description: "Специализированное ПО для управления производством",
    image: "/placeholder.svg",
  },
];

export default Products;