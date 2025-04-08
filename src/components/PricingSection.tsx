
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Базовий",
    price: "$19",
    description: "Ідеально для початківців, які хочуть спробувати дропшипінг 😌",
    features: [
      "1 урок",
      "10 перевіриних базових постачальників"
    ],
    isPopular: false
  },
  {
    id: 2,
    name: "Стандарт",
    price: "$190",
    description: "Найпопулярніший вибір для успішного старту 😎",
    features: [
      "Все з тарифу Базовий",
      "2, 3 урок",
      "5 унікальних постачальників",
      "Інформація по співпраці з постачальниками",
      "7 днів підтримки від мене"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "VIP",
    price: "$370",
    description: "Максимальна підтримка для швидкого успіху 💰",
    features: [
      "Все з тарифу Стандарт",
      "4, 5 урок",
      "Ексклюзивний VIP-постачальник",
      "Місяць підтримки від мене",
      "Особисті зустрічі",
      "Закритий канал з покроковою інструкцією по створенню продаж за 7 днів з вкладеннями до 800 грн",
      "Таємний блок (секрети та лайфхаки)",
      "Гарантія старту продаж",
      "Брендинг Вашого магазину",
      "Найшвидший метод, як отримати клієнтів за тиждень",
      "Закритий чат",
      "Зідзвони та мій особистий нагляд"
    ],
    isPopular: false
  }
];

const PricingSection = () => {
  const [currentPlan, setCurrentPlan] = useState(1); // Starts with the popular plan

  const nextPlan = () => {
    setCurrentPlan((prev) => (prev === pricingPlans.length - 1 ? 0 : prev + 1));
  };

  const prevPlan = () => {
    setCurrentPlan((prev) => (prev === 0 ? pricingPlans.length - 1 : prev - 1));
  };

  return (
    <section id="pricing" className="section-padding bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Оберіть свій <span className="text-pink-600">тариф</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Інвестуйте у своє майбутнє та почніть заробляти вже сьогодні
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden lg:flex justify-center gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white rounded-2xl p-8 shadow-sm border w-full max-w-md relative overflow-visible ${
                plan.isPopular 
                  ? 'border-pink-400 transform scale-105 shadow-lg z-10' 
                  : 'border-gray-100'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -right-2 -top-2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Найпопулярніший
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-pink-600">{plan.price}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-pink-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={plan.isPopular ? 'btn-pink w-full' : 'btn-outline-pink w-full'}
              >
                Обрати тариф
              </Button>
            </div>
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentPlan * 100}%)` }}>
                {pricingPlans.map((plan) => (
                  <div key={plan.id} className="w-full flex-shrink-0 px-4">
                    <div 
                      className={`bg-white rounded-2xl p-6 shadow-sm border relative ${
                        plan.isPopular ? 'border-pink-400' : 'border-gray-100'
                      }`}
                    >
                      {plan.isPopular && (
                        <div className="absolute -right-4 top-1 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Найпопулярніший
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-pink-600">{plan.price}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="text-pink-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={plan.isPopular ? 'btn-pink w-full' : 'btn-outline-pink w-full'}
                      >
                        Обрати тариф
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevPlan}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-pink-600 hover:bg-pink-50"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextPlan}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-pink-600 hover:bg-pink-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {pricingPlans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPlan(index)}
                className={`w-3 h-3 rounded-full ${currentPlan === index ? 'bg-pink-500' : 'bg-pink-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
