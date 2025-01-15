import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="gradient-header text-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="text-blue-600 font-bold text-xl">T</div>
            </div>
            <span className="font-bold text-xl">TechPro</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-200 transition-colors">Главная</Link>
            <Link to="/products" className="hover:text-gray-200 transition-colors">Продукция</Link>
            <Link to="/team" className="hover:text-gray-200 transition-colors">Команда</Link>
            <Link to="/contact" className="hover:text-gray-200 transition-colors">Контакты</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;