
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ProgramModule {
  id: number;
  title: string;
  topics: string[];
}

const programModules: ProgramModule[] = [
  {
    id: 1,
    title: "Урок 1:",
    topics: [
      "10 базових постачальників з якими вже можна працювати"
    ]
  },
  {
    id: 2,
    title: "Урок 2:",
    topics: [
      "Початкова робота у створенні магазину",
      "Створення магазину та його ПРАВИЛЬНЕ упакування",
      "Ознайомлення з бізнес профілем",
      "Ознайомлення з постачальниками, як їх знаходити та як з ними працювати",
      "Різниця між базовими та унікальними постачальниками",
      "Робота з товаром в профілі",
      "Ознайомлення як оформлювати замовлення"
    ]
  },
  {
    id: 3,
    title: "Урок 3:",
    topics: [
      "Деталізація",
      "Інструкція роботи з товаром",
      "Націнка",
      "Накладений платіж",
      "Доставка",
      "Чому товар не потрібно замовляти на руки"
    ]
  },
  {
    id: 4,
    title: "Урок 4:",
    topics: [
      "Детальний підбір назви",
      "УТП",
      "Вивчення конкуренції",
      "Підбір особистого стилю",
      "Робота з проблемними клієнтами",
      "Таємний блок"
    ]
  },
  {
    id: 5,
    title: "Урок 5:",
    topics: [
      "Просування профілю, безкоштовні методи",
      "Створення брендування",
      "Звʼязок з клієнтами по за інстаграмом",
      "Маркетингова воронка та лід-магніт",
      "Корисні сервіси",
      "Лайфхаки в інстаграм",
      'Найшвидший метод або "Як отримати перших клієнтів за тиждень". Покрокова інструкція',
      "Блок з відповідями на найпоширеніші запитання",
      "Питання з ФОП",
      "Просування в Тік-Ток"
    ]
  }
];

const ProgramSection = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const nextModule = () => {
    setCurrentModule((prev) => (prev === programModules.length - 1 ? 0 : prev + 1));
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev === 0 ? programModules.length - 1 : prev - 1));
  };

  return (
    <section id="program" className="section-padding bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Програма <span className="text-pink-600">навчання</span>
          </h2>
          <p className="text-іь text-gray-600 max-w-3xl mx-auto">
            Комплексна програма з 5 уроків, яка допоможе вам запустити прибутковий Instagram-магазин з нуля
          </p>
        </div>

        {/* Desktop view - all modules */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {programModules.map((module) => (
            <Card key={module.id} className="card-pink hover:card-hover animate-fade-in overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-pink-600">{module.title}</h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile view - carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentModule * 100}%)` }}>
                {programModules.map((module) => (
                  <div key={module.id} className="w-full flex-shrink-0 px-4">
                    <Card className="card-pink h-full">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-pink-600">{module.title}</h3>
                        <ul className="space-y-2">
                          {module.topics.map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-pink-500 mr-2">•</span>
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevModule}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-pink-600 hover:bg-pink-50"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextModule}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-pink-600 hover:bg-pink-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {programModules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentModule(index)}
                className={`w-3 h-3 rounded-full ${currentModule === index ? 'bg-pink-500' : 'bg-pink-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
