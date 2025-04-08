
import React from 'react';
import { CheckCircle, ShoppingBag, Globe, TrendingUp, Users } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="card-pink hover:card-hover animate-fade-in">
      <div className="text-pink-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Ти дізнаєшся <span className="text-pink-600">та навчишся</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<ShoppingBag size={48} />}
            title="Створення продаючого магазину"
            description="Як зробити магазин продаючим за 1.5 тижні та побачиш ПОКРОКОВО прописану інструкцію з живими прикладами"
          />
          
          <BenefitCard 
            icon={<TrendingUp size={48} />}
            title="Безкоштовні методи просування"
            description="Безкоштовні методи просування, якими я користуюсь. Саме завдяки ним, ти отримаєш свої перші продажі."
          />
          
          <BenefitCard 
            icon={<Globe size={48} />}
            title="Робота з постачальниками"
            description="Як працювати з постачальниками, де вони ховаються та як замовляти товар напряму з Китаю з доставкою у 10 днів"
          />
          
          <BenefitCard 
            icon={<Users size={48} />}
            title="Співпраця з блогерами"
            description="З якими блогерами краще співпрацювати та отримаєш доступ в закритий чат, де з'являються усі актуальні новини."
          />
          
          <BenefitCard 
            icon={<CheckCircle size={48} />}
            title="Лайфхаки для перших продажів"
            description="Які лайфхаки використовувати, аби продажі пішли з першого тижня (те, що я пройшла на особистому досвіді)"
          />
          
          <BenefitCard 
            icon={<ShoppingBag size={48} />}
            title="Актуальні тренди і новини"
            description="Усі актуальні новини, нововведення, як уникати шахраїв, все про податки, та багато іншого корисного."
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
