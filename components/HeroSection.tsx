import React, { useState, useEffect } from 'react';
import Slider1 from '@/containers/Slider1';
import Slider2 from '@/containers/Slider2';
import Slider3 from '@/containers/Slider3';

const slides = [
  { id: 1, component: <Slider1 /> },
  { id: 2, component: <Slider2 /> },
  { id: 3, component: <Slider3 /> },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            {index === currentIndex && slide.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
