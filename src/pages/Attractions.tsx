import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

type Attraction = {
  title: string;
  description: string;
  distance: string;
  image: string;
  mapLink: string;
  category: string;
};

const Attractions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('wszystkie');

  const attractions: Attraction[] = [
    {
      "title": "Ciężkowicko-Rożnowski Park Krajobrazowy",
      "description": "Park krajobrazowy oferujący malownicze szlaki turystyczne i unikalne formacje skalne.",
      "distance": "5 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Przyroda"
    },
    {
      "title": "Skamieniałe Miasto w Ciężkowicach",
      "description": "Rezerwat przyrody z unikalnymi formacjami skalnymi przypominającymi ruiny miasta.",
      "distance": "10 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Przyroda"
    },
    {
      "title": "Brzanka – szlak górski",
      "description": "Malowniczy szlak prowadzący na szczyt Brzanki z wieżą widokową.",
      "distance": "15 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Aktywność"
    },
    {
      "title": "Wyciąg narciarski Jurasówka",
      "description": "Stok narciarski idealny dla miłośników sportów zimowych.",
      "distance": "20 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Aktywność"
    },
    {
      "title": "Aqua Park Tarnów",
      "description": "Park wodny z licznymi atrakcjami dla dzieci i dorosłych.",
      "distance": "25 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Dla dzieci"
    },
    {
      "title": "Velo Dunajec – ścieżka rowerowa",
      "description": "Malownicza trasa rowerowa wzdłuż rzeki Dunajec.",
      "distance": "30 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Aktywność"
    },
    {
      "title": "Kościół pw. św. Mikołaja Biskupa w Brzozowej",
      "description": "Drewniany kościół z XVI wieku o unikalnej architekturze.",
      "distance": "0 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Kultura"
    },
    {
      "title": "Muzeum Regionalne w Brzozowej",
      "description": "Muzeum prezentujące lokalne dziedzictwo kulturowe i historyczne.",
      "distance": "0 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Kultura"
    },
    {
      "title": "Centrum Dziedzictwa Szkła w Krośnie",
      "description": "Interaktywne muzeum ukazujące proces tworzenia szkła.",
      "distance": "40 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Kultura"
    },
    {
      "title": "Grodzisko w Trepczy",
      "description": "Archeologiczne stanowisko z pozostałościami wczesnośredniowiecznego grodziska.",
      "distance": "45 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Kultura"
    },
    {
      "title": "Skansen w Sanoku",
      "description": "Muzeum Budownictwa Ludowego prezentujące tradycyjną architekturę regionu.",
      "distance": "50 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Kultura"
    },
    {
      "title": "Park Linowy w Tarnowie",
      "description": "Atrakcja dla dzieci i dorosłych z trasami o różnym stopniu trudności.",
      "distance": "25 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Dla dzieci"
    },
    {
      "title": "Rezerwat Przyrody Skamieniałe Miasto",
      "description": "Obszar chroniony z unikalnymi formacjami skalnymi i legendami.",
      "distance": "10 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Przyroda"
    },
    {
      "title": "Ścieżka edukacyjna na Brzance",
      "description": "Trasa z tablicami informacyjnymi o lokalnej faunie i florze.",
      "distance": "15 km",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      "mapLink": "https://maps.app.goo.gl/",
      "category": "Aktywność"
    }
  ];

  const categories = ['wszystkie', ...new Set(attractions.map(a => a.category))];

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="h-64 relative">
        <img
          src="/background.jpg"
          alt="Las"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-32 relative">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">Atrakcje w okolicy</h1>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-primary text-secondary'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {attractions
              .filter(attraction => selectedCategory === 'wszystkie' || attraction.category === selectedCategory)
              .map((attraction, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <h2 className="text-xl font-semibold">{attraction.title}</h2>
                        <span className="text-sm text-gray-500 mt-1 md:mt-0">Odległość: {attraction.distance}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{attraction.description}</p>
                      <a
                        href={attraction.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        Zobacz na mapie
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;