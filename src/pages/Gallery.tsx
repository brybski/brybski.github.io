import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';

type GalleryCategory = {
  name: string;
  images: { src: string; alt: string; }[];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('na zewnątrz');

  const categories: GalleryCategory[] = [
    {
      name: "na zewnątrz",
      images: [
        { src: "/outside10.jpg", alt: "Na zewnątrz 1" },
        { src: "/outside11.jpg", alt: "Na zewnątrz 2" },
        { src: "/outside12.jpg", alt: "Na zewnątrz 3" },
        { src: "/outside13.jpg", alt: "Na zewnątrz 3" },
      ],
    },
    {
      name: "salon",
      images: [
        { src: "/living1.jpg", alt: "Salon 1" },
        { src: "/living2.jpg", alt: "Salon 2" },
        { src: "/living3.jpg", alt: "Salon 3" },
        { src: "/living4.jpg", alt: "Salon 4" },
        { src: "/living5.jpg", alt: "Salon 5" },
      ],
    },
    {
      name: "pokoje",
      images: [
        { src: "/room1.jpg", alt: "Pokój 1" },
        { src: "/room2.jpg", alt: "Pokój 2" },
      ],
    },
    {
      name: "taras",
      images: [{ src: "/taras.jpg", alt: "Taras" }],
    },
    {
      name: "sauna",
      images: [{ src: "/sauna1.jpg", alt: "Sauna" }],
    },
    {
      name: "jacuzzi",
      images: [{ src: "/jacuzzi.jpg", alt: "Jacuzzi" }],
    },
  ];

  const currentImages = categories.find(cat => cat.name === selectedCategory)?.images || [];

  const handleNext = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % currentImages.length : null
    );
  };

  const handlePrev = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + currentImages.length) % currentImages.length : null
    );
  };

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
          <h1 className="text-4xl font-bold mb-8">Galeria</h1>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full capitalize ${
                  selectedCategory === category.name
                    ? 'bg-primary text-secondary'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage !== null && (
            <ImageModal
              images={currentImages.map(img => img.src)}
              currentIndex={selectedImage}
              onClose={() => setSelectedImage(null)}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;