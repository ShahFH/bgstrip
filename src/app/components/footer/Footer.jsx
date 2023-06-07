import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
          <p className="text-gray-300 text-sm sm:text-base">© 2023 BGRSTRIP. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
            <span className="text-gray-300 mx-2">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
