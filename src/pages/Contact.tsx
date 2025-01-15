import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Наш адрес</h2>
          <div className="space-y-4 text-gray-600">
            <p>ул. Промышленная, 123</p>
            <p>г. Москва, 123456</p>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Email: info@techpro.ru</p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Режим работы</h2>
            <div className="space-y-2 text-gray-600">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Вс: Выходной</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Напишите нам</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input placeholder="Ваше имя" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" required />
            </div>
            <div>
              <Input placeholder="Тема сообщения" required />
            </div>
            <div>
              <Textarea placeholder="Ваше сообщение" className="h-32" required />
            </div>
            <Button type="submit" className="w-full">Отправить сообщение</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;