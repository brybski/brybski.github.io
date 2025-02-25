import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  onImageClick?: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  interval = 5000,
  onImageClick 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      <div 
        className="w-full h-full cursor-pointer"
        onClick={onImageClick}
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Zdjęcie ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;