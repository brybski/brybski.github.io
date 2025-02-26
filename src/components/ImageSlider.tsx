import React, { useState, useEffect, useRef } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  onImageClick?: (index: number) => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  interval = 5000,
  onImageClick,
  onSwipeLeft,
  onSwipeRight
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const isMobile = window.innerWidth <= 768;

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeRight) {
      onSwipeRight();
    }
    if (isRightSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 3) {
      onSwipeLeft?.();
    } else if (x > (width * 2) / 3) {
      onSwipeRight?.();
    } else {
      onImageClick?.(currentIndex);
    }
  };

  return (
    <div 
      className="relative w-full h-full"
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full h-full">
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
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;