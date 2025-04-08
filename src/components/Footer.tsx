
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-pink-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 mr-[20%] md:mb-0">
            <h2 className="text-2xl font-bold text-pink-600 font-bebas">InstaShop</h2>
            <p className="text-gray-600 mt-1">Навчання дропшипінгу в Instagram</p>
          </div>
        </div>
        
        <div className="border-t border-pink-100 mt-6 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} InstaShop Курс. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
