import React, { useState } from "react";

type GalleryCategory = {
  name: string;
  images: { src: string; alt: string }[];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("pokoje");

  const categories: GalleryCategory[] = [
    {
      name: "pokoje",
      images: [
        { src: "/room1.jpg", alt: "Pokój 1" },
        { src: "/room2.jpg", alt: "Pokój 2" },
      ],
    },
    {
      name: "salon",
      images: [
        { src: "/living1.jpg", alt: "Salon 1" },
        { src: "/living2.jpg", alt: "Salon 2" },
      ],
    },
    {
      name: "taras",
      images: [{ src: "/taras.jpg", alt: "Taras" }],
    },
    {
      name: "na zewnątrz",
      images: [{ src: "/outside1.jpg", alt: "Na zewnątrz 1" }],
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

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="h-64 relative">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
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
                    ? "bg-primary text-secondary"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .find((cat) => cat.name === selectedCategory)
              ?.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Powiększone zdjęcie"
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white text-xl"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
