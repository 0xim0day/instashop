
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-pink-diagonal">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-right">
              {/* Placeholder for instructor photo */}
              <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                <img src="/IMG_2056.jpg" />
              </div>
            </div>
            
            <div className="animate-fade-in-left">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
                Про <span className="text-pink-600">мене</span> 👋🏼
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Привіт! Мене звати Марина та мені 22 роки.
                  Я довго тримала в секреті те, чим я заробляю і завдячуючи чому відчуваю себе фінансово незалежною.
                </p>
                <p>
                  Але прийшов час зняти ширму і не тільки показати, але й навчити інших відчувати себе комфортно та заробляти з будь-якої точки світу!
                </p>
                <p className="font-medium">
                  Я готова поділитись цим з тобою, так як відчуваю та знаю, що відкити свій особистий магазин одягу – було моє найкраще рішення за все життя!
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="card-pink">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-pink-600 text-3xl font-bold mb-1">500+</h3>
                    <p className="text-gray-600">Задоволених учнів</p>
                  </CardContent>
                </Card>
                
                <Card className="card-pink">
                  <CardContent className="p-4 text-center">
                    <h3 className="text-pink-600 text-3xl font-bold mb-1">3 роки</h3>
                    <p className="text-gray-600">Досвіду в дропшипінгу</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
