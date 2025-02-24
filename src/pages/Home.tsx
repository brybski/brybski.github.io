import React from 'react';
import { Phone } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/odpoczniesztu-bg2.jpg"
          />
          <img
            src="/odpoczniesztu-bg.jpg"
            alt="Domek"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black bg-opacity-40">
  <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
    <div className="text-white transform translate-y-[-80px] md:translate-y-0">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Twoja prywatna strefa komfortu
      </h1>
      <p className="text-xl md:text-2xl">
        Przytulny domek z dala od miejskiego zgiełku
      </p>
    </div>
  </div>
</div>

      </div>

      {/* O nas Section */}
      <section id="o-nas" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-accent text-lg mb-2">O nas</h2>
          <h3 className="text-3xl font-serif italic mb-8">Twoje miejsce w sercu natury</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-justify">
                Przytulny domek w malowniczej miejscowości Brzozowa,
                położonej na Pogórzu Ciężkowicko-Rożnowskim, to idealne
                miejsce dla osób szukających spokoju i bliskości natury. Z dala
                od miejskiego zgiełku, oferuje komfortowy wypoczynek dla
                maksymalnie 8 osób.
              </p>
              <p className="text-lg text-justify">
                To idealne miejsce zarówno dla rodzin, jak i grup przyjaciół.
                Oferujemy także udogodnienia dla dzieci, takie jak łóżeczko
                turystyczne czy fotelik do karmienia.
              </p>
              <p className="text-lg font-medium text-justify">
                Zarezerwuj już dziś i ciesz się spokojem w sercu natury!
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
                <img
                  src="/taras.jpg"
                  alt="Taras z widokiem"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
                <img
                  src="/jacuzzi.jpg"
                  alt="Jacuzzi na zewnątrz"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">
              Masz pytania bądź chcesz zarezerwować?
            </h2>
            <a
              href="tel:+48880465592"
              className="bg-primary text-secondary px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              +48 880 465 592
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;