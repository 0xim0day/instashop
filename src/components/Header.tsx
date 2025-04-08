
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-pink-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pink-600">InstaShop</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-700 hover:text-pink-600 transition-colors">Переваги</a>
          <a href="#program" className="text-gray-700 hover:text-pink-600 transition-colors">Програма</a>
          <a href="#faq" className="text-gray-700 hover:text-pink-600 transition-colors">FAQ</a>
          <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">Про мене</a>
          <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors">Тарифи</a>
        </nav>
        
        <div>
          <Button className="btn-pink">Почати навчання</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
