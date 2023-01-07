import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-400 text-sm font-semibold py-1">Copyright &copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-semibold py-1">Twitter</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-semibold py-1">Facebook</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-semibold py-1">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer