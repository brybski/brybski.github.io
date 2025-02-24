import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, MapPin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1A1A1A] bg-opacity-90 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>Zarezerwuj już teraz!</span>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+48 880 465 592</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>odpoczniesztu@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61566660407549" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/odpoczniesztu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/odpoczniesztu-logo.png" 
                alt="Odpoczniesztu" 
                className="h-12 w-auto"
              />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'STRONA GŁÓWNA', path: '/' },
                { name: 'GALERIA', path: '/galeria' },
                { name: 'ATRAKCJE', path: '/atrakcje' },
                { name: 'KONTAKT', path: '/kontakt' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isScrolled ? 'text-text' : 'text-white'
                  } hover:text-primary transition-colors duration-200 ${
                    isActive(item.path) ? 'border-b-2 border-primary' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-text' : 'text-white'} p-2`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'STRONA GŁÓWNA', path: '/' },
                { name: 'GALERIA', path: '/galeria' },
                { name: 'ATRAKCJE', path: '/atrakcje' },
                { name: 'KONTAKT', path: '/kontakt' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-text hover:bg-gray-100 rounded-md ${
                    isActive(item.path) ? 'bg-primary/10 text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {children}

      {/* Footer */}
      <footer>
  {location.pathname === '/' && (
    <div className="bg-[#F5F5F5] py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <img 
            src="/odpoczniesztu-logo2.png" 
            alt="Odpoczniesztu" 
            className="h-16 w-auto"
          />
        </div>
        <div className="md:px-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Lokalizacja
          </h3>
          <p className="hidden md:inline">Brzozowa 270</p>
          <p>33-182 Brzozowa, Polska</p>
          <a 
            href="https://maps.app.goo.gl/NDb1JbzdycAUYieX7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 mt-2 inline-flex items-center"
          >
            Zobacz na mapie <MapPin className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="md:px-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Kontakt
          </h3>
          <p>Tel: +48 880 465 592</p>
          <p>E-mail: odpoczniesztu@gmail.com</p>
        </div>
      </div>
    </div>
  )}
  <div className="bg-[#1A1A1A] text-white py-4">
    <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center">
      <p className="flex-1">
        {currentYear} | Odpoczniesz tu<span className="hidden md:inline">, Brzozowa 270</span>
      </p>
      <div className="flex space-x-4 justify-end">
        <a href="https://www.facebook.com/profile.php?id=61566660407549" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/odpoczniesztu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Layout;