import React from 'react';
import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="py-12 sm:py-16 md:py-20" id="Demo">
      <div className="container mx-auto px-4">
        <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-black mb-6">
          <span className="text-yellow-400">Try</span> it Out
        </motion.h2>
        <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[14px] sm:text-xl md:text-2xl text-gray-600 text-center mb-12">
          See how easy it is to remove the background from your images.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-12 lg:gap-16 mx-auto max-w-6xl">
          <div className="relative">
            <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
             className="aspect-w-4 aspect-h-3">
              <img
                src={require('../Photos/Imgbg.webp')}
                alt="Demo Image 1"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
          <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
            className="aspect-w-4 aspect-h-3">
              <img
                src={require('../Photos/ImgRemoveBg.webp')}
                alt="Demo Image 2"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
          <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
            className="aspect-w-4 aspect-h-3">
              <img
                src={require('../Photos/PlacedNewBg.webp')}
                alt="Demo Image 3"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            View More Examples
          </a>
        </div>
      </div>
    </section>
  );
}
