import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  currentIndex?: number;
  onImageClick?: (index: number) => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onIndexChange?: (index: number) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  interval = 5000,
  currentIndex: externalIndex,
  onImageClick,
  onSwipeLeft,
  onSwipeRight,
  onIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(externalIndex || 0);
  const [isHovering, setIsHovering] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);
  const isMobile = window.innerWidth <= 768;

  const minSwipeDistance = 50;

  useEffect(() => {
    if (typeof externalIndex === 'number') {
      setCurrentIndex(externalIndex);
    }
  }, [externalIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      onIndexChange?.(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, currentIndex, onIndexChange]);

  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchEnd.current = null;
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchEnd.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const deltaX = touchStart.current.x - touchEnd.current.x;
    const deltaY = touchStart.current.y - touchEnd.current.y;

    // Sprawdź, czy przesunięcie było bardziej poziome niż pionowe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      const isLeftSwipe = deltaX > minSwipeDistance;
      const isRightSwipe = deltaX < -minSwipeDistance;

      if (isLeftSwipe && onSwipeRight) {
        onSwipeRight();
      }
      if (isRightSwipe && onSwipeLeft) {
        onSwipeLeft();
      }
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
      className="relative w-full h-full group"
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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

      {/* Strzałki nawigacyjne - widoczne tylko na desktopie */}
      {!isMobile && (
        <>
          <div 
            className={`absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start px-4 transition-opacity duration-200 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-black/50 p-2 rounded-full text-white">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </div>
          <div 
            className={`absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end px-4 transition-opacity duration-200 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-black/50 p-2 rounded-full text-white">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </>
      )}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = index;
              setCurrentIndex(newIndex);
              onIndexChange?.(newIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;