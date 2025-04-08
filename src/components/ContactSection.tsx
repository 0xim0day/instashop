
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-pink-diagonal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-6 text-gray-800 font-sofia">
            Готові <span className="text-pink-600">почати?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Зв'яжіться зі мною, щоб дізнатись більше або придбати курс. Я з радістю відповім на всі ваші запитання!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <a href="t.me/maiyly19" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-all">
              <MessageCircle className="text-pink-500 mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">@maiyly19</p>
            </a>
            
            <a href="https://instagram.com/maiyly.19" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-pink-100 hover:shadow-md transition-all">
              <Instagram className="text-pink-500 mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600">@maiyly.19</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
