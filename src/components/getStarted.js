import React from 'react';

export default function GetStarted() {
  const handleScrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 rounded-3xl mx-auto my-6 bg-[#F6F6F6] md:my-12 lg:my-20 xl:my-28 max-w-[1170px]" id='GetStarted'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-900 mb-4 md:mb-6 font-extrabold">
          Ready to <span className="text-yellow-400">remove</span> the<br />{' '}
          <span className="text-yellow-400">background</span> of your image?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-6 md:mb-8">
          Remove background from images of humans, animals or objects and<br /> download high-resolution images for free.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-6 md:px-8 rounded-lg focus:outline-none focus:shadow-outline"
            onClick={handleScrollToHome}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
