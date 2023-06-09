import React from 'react';
import { motion } from "framer-motion";


export default function howToUse() {
return (
  <main className="flex min-h-screen flex-col items-center p-4 md:p-24 max-sm:m-12" id="howToUse">
    <div className="w-full md:w-[570px]">
      <h1 className="text-[44px] text-black font-extrabold text-center mb-2">
        <span className="text-yellow-400">Easy steps to</span> remove an image
        background
      </h1>
      <p className="text-[16px] text-gray-500 text-center">
        Remove background from images of humans, animals or objects and download
        high-resolution images for free.
      </p>
    </div>
    <div className="flex flex-col gap-6 mt-16 md:flex-row">
      <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.4 }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
       className="w-full md:w-[370px] h-[180px] bg-[#F6F6F6] rounded-2xl p-6 flex gap-5">
        <h1 className="text-yellow-400 font-extrabold text-[42px]">1</h1>
        <div>
          <h2 className="text-black font-bold mt-4 mb-2">Upload image</h2>
          <p className="text-[14px] text-gray-500">
            For best results, choose an image where the subject has clear edges
            with nothing overlapping.
          </p>
        </div>
      </motion.div>
      <motion.div 
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.4 }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
      className="w-full md:w-[370px] h-[180px] bg-[#F6F6F6] rounded-2xl p-6 flex gap-5 mt-6 md:mt-0">
        <h1 className="text-yellow-400 font-bold text-[42px]">2</h1>
        <div>
          <h2 className="text-black font-bold mt-4 mb-2">Remove background</h2>
          <p className="text-[14px] text-gray-500">
            Upload your image to automatically remove the background in an
            instant.
          </p>
        </div>
      </motion.div>
      <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.4 }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
       className="w-full md:w-[370px] h-[180px] bg-[#F6F6F6] rounded-2xl p-6 flex gap-5 mt-6 md:mt-0">
        <h1 className="text-yellow-400 font-extrabold text-[42px]">3</h1>
        <div>
          <h2 className="text-black font-bold mt-4 mb-2">Download Image</h2>
          <p className="text-[14px] text-gray-500">
            Download your new image as a PNG file with a transparent background
            to save, share, or keep editing.
          </p>
        </div>
      </motion.div>
    </div>
  </main>
);
}