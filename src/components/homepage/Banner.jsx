'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImage1 from '@/images/qurbani1.jpg';
import bannerImage2 from '@/images/qurbain2.png';

const imageItem = [
  {
    id: 1,
    img: bannerImage1,
    title: 'সেরা কোরবানির পশুপাখি',
    subTitle: 'আমরা দিচ্ছি সবচেয়ে সুস্থ ও সবল পশুর নিশ্চয়তা।',
  },
  {
    id: 2,
    img: bannerImage2,
    title: 'প্রকৃতির সাথে পথচলা',
    subTitle: 'পশুপাখির যত্ন ও ভালোবাসা আমাদের লক্ষ্য।',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % imageItem.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden shadow-xl">
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={imageItem[currentIndex].img}
                alt="Banner Image"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 sm:bg-black/35"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-4 sm:px-8 md:px-12 lg:px-20 max-w-[95%] sm:max-w-[80%] md:max-w-[60%] z-10">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    {imageItem[currentIndex].title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed"
                  >
                    {imageItem[currentIndex].subTitle}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white font-medium transition-all duration-300 text-sm sm:text-base"
                  >
                    বিস্তারিত দেখুন
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {imageItem.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 h-2 bg-emerald-500'
                  : 'w-2 h-2 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
