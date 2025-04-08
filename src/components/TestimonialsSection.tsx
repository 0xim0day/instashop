
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder for testimonial images
  const testimonialSlides = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialSlides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialSlides.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Відгуки <span className="text-pink-600">учнів</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ось що говорять учні, які вже пройшли навчання та запустили свої магазини
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonialSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 px-0">
                  {/* Placeholder for testimonial image */}
                  <div className="aspect-[3/2] bg-gray-200 flex items-center justify-center text-gray-400">
                    Відгук {slide.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-pink-600 hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-pink-600 hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-pink-500' : 'bg-pink-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
