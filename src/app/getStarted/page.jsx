import Image from 'next/image';
import React from 'react';

export default function GetStarted() {
    const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
return (
    <section className="bg-white py-12 sm:py-16 md:py-20 w-[1170px] h-[484px] rounded-3xl mx-auto my-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-gray-900 mb-6 font-extrabold">Ready to <span className='text-yellow-400'>remove</span> the<br/> <span className='text-yellow-400'>background</span> of your image?</h2>
        <p className="text-[14px] sm:text-xl md:text-2xl text-gray-600 text-center mb-8">Remove background from images of humans, animals or objects and<br/> download high-resolution images for free.</p>
        <div className="flex justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline" onClick={handleScrollToHome}>Get Started</button>
        </div>
      </div>
    </section>
);
}