import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 py-6 fixed">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between">
        <a to="/" className="text-white font-bold text-3xl">
          My Portfolio
        </a>
        <div>
          <a to="/about" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-gray-700">
            About
          </a>
          <a to="/services" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-gray-700">
            Services
          </a>
          <a to="/contact" className="px-4 py-2 text-white font-semibold rounded-full hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar