
import React from 'react';
import { MessageSquare, Bookmark, Clock, CheckCircle, Store } from 'lucide-react';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: <CheckCircle className="text-pink-500" size={36} />,
    title: "Оплата курсу 💳",
    description: "Обирайте зручний для вас тариф та спосіб оплати."
  },
  {
    icon: <MessageSquare className="text-pink-500" size={36} />,
    title: "Підключення до Telegram 🔗",
    description: "Одразу після оплати, я скидаю Вам усю інформацію в телеграмі, яку детально розписала в документі и каналі."
  },
  {
    icon: <Bookmark className="text-pink-500" size={36} />,
    title: "Доступ до матеріалів 📂",
    description: "Постійне оновлення актуальних, трендових та нових постачальників. Доступ до каналу з усіма відповідями на питання."
  },
  {
    icon: <Clock className="text-pink-500" size={36} />,
    title: "Підтримка 24/7 👩🏻‍💻",
    description: "Між нами не буде секретів, я з вами на звязку 24/7 протягом місяця. Якщо ви з Вінниці, зможемо без проблем запланувати обисті зустрічі."
  },
  {
    icon: <Store className="text-pink-500" size={36} />,
    title: "Запуск магазину 🚀",
    description: "Просування за 1,5 тижня платними і безкоштовними методами, моя допомога в оформлені та створенні профілю магазину, логотипу, корисні сервіси."
  }
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Як все <span className="text-pink-600">працює?</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-8 last:mb-0 pl-16 animate-fade-in">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-pink-200"></div>
              )}
              
              {/* Process step */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                {step.icon}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
