"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleScrollToBenefits = (e) => {
    e.preventDefault();
    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[100dvh] bg-[#fceded] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Логотип или заголовок сверху */}
      <h1 className="text-3xl font-bold absolute font-bebas top-4 z-10 text-pink-600 md:text-4xl">InstaShop</h1>

      {/* Основной заголовок с анимацией */}
      <motion.div
        className="relative flex flex-col items-start text-black  font-bold text-xl mr-4 md:mt-[15vh] md:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative ml-8 mt-16 z-20 md:ml-16">
          <span className="relative z-20 font-sofia text-3xl md:text-3xl">Створи власний</span>
          <img
            src="/line.png"
            alt="Highlight"
            className="absolute z-10 w-[140%] h-[150%] max-w-[410px] h-auto left-[-55px] bottom-[-5px] md:w-[410px] md:left-[-30px]"
          />
        </div>
        <div className="relative ml-12 mt-2 z-20 md:ml-24">
          <span className="relative z-20 font-sofia text-3xl md:text-3xl">Instagram магазин</span>
          <img
            src="/line.png"
            alt="Highlight"
            className="absolute z-10 w-[140%] h-[150%] max-w-[340px] h-auto left-[-55px] bottom-[-5px] md:w-[340px] md:left-[-55px]"
          />
        </div>
      </motion.div>
      <p className="text-base text-gray-600 z-5 ml-32 mt-4 mb-8 font-sofia md:text-lg md:ml-32 md:mb-10">
        *На органіці та без вкладень
      </p>

      {/* Изображения с анимацией */}
      <div className="relative flex justify-center items-center mt-[-15%] w-full mr-[10%] max-w-[90%] md:max-w-[80%] mt-[-5vh] md:mt-[-50px] z-[2]">
        <motion.img
          src="/phoneInst.png"
          alt="Phone Mockup"
          className="w-[70%] max-w-[300px] md:w-80"
          animate={{ x: [0, 3, -3, 0], y: [0, -2, 2, 0] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/photoMain.png"
          alt="Person"
          className="w-[75%] max-w-[300px] absolute right-[-10%] top-[40%] bottom-0 md:w-80 md:right-0 md:bottom-10"
          style={{ left: "auto", transform: "translateX(-20%)" }}
          animate={{ x: [0, 3, -3, 0], y: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Ссылка вниз */}
      <div className="absolute bottom-[env(safe-area-inset-bottom, 10px)] top-[95%] transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#benefits"
          onClick={handleScrollToBenefits}
          className="flex flex-col items-center text-pink-600"
        >
          <span className="text-sm">Дізнатися більше</span>
          <ChevronDown size={24} />
        </a>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-200 rounded-full opacity-50 blur md:w-64 md:h-64" style={{ zIndex: "0" }}></div>
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-pink-300 rounded-full opacity-50 blur md:w-72 md:h-72" style={{ zIndex: "0" }}></div>
    </div>
  );
};

export default HeroSection;
