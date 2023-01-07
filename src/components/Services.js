import React from 'react'

const Services = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Services</h2>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-700 mb-4">I offer full stack web development services, from conceptualization and design to deployment and maintenance.</p>
              <ul className="list-inside text-gray-700">
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-gray-700 mb-4">I can help you design and optimize the user experience of your web application.</p>
              <ul className="list-inside text-gray-700">
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User Testing</li>
                <li>Design Consulting</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consulting</h3>
              <p className="text-gray-700 mb-4">Not sure where to start with your project? I offer consulting services to help you plan and execute your vision.</p>
              <ul className="list-inside text-gray-700">
                <li>Project Planning</li>
                <li>Tech Stack Selection</li>
                <li>Scoping and Estimation</li>
                <li>Agile Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services