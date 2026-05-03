'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import banner from '@/images/Qrubani.png';
import Link from 'next/link';

const slides = [
  {
    image: banner,
    title: 'Premium Qurbani Animals Marketplace',
    description:
      'Find healthy and verified Qurbani animals with trusted sellers across Bangladesh. Safe, reliable, and professional experience.',
    buttonText: 'Explore Animals',
    href: '/allanimals',
  },
  {
    image: banner,
    title: 'Choose The Best Animal For Qurbani',
    description:
      'Browse premium cattle, goats, and sheep with transparent pricing, verified details, and secure communication.',
    buttonText: 'Browse Collection',
    href: '/allanimals',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={slides[currentIndex].image}
                alt="Qurbani Banner"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/10"></div>

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-400/20 backdrop-blur-md"
                    >
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <p className="text-yellow-300 text-sm font-medium tracking-wide uppercase">
                        Trusted Qurbani Marketplace
                      </p>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                      {slides[currentIndex].title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl"
                    >
                      {slides[currentIndex].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mt-8 flex flex-wrap gap-4"
                    >
                      <Link href={slides[currentIndex].href}>
                        <button className="group inline-flex items-center gap-2 rounded-2xl cursor-pointer bg-yellow-500 hover:bg-yellow-400 px-6 py-3 text-black font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/20">
                          {slides[currentIndex].buttonText}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>

                      <button className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 text-white hover:bg-white/10 transition-all duration-300">
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>
        </div>

        <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-10 h-3 bg-yellow-400'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
