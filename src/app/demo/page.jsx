import Image from 'next/image';
import React from 'react';

export default function Demo() {
return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-black mb-6"><span className='text-yellow-400'>Try</span> it Out</h2>
        <p className="text-[14px] sm:text-xl md:text-2xl text-gray-600 text-center mb-12">See how easy it is to remove the background from your images.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <img src="/demo-image-1.jpg" alt="Demo Image 1" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/demo-image-2.jpg" alt="Demo Image 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/demo-image-3.jpg" alt="Demo Image 3" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">View More Examples</a>
        </div>
      </div>
    </section>
);
}