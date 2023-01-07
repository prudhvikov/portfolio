import Prudhvi from '../images/prudhvi.jpeg'

const About = () => {
    return (
        <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">About Me</h2>
          <div className="flex flex-wrap items-center justify-center">
            <img src={Prudhvi} alt="Profile" className="w-1/3 rounded-full mb-6" />
            <div className="w-2/3 pl-6">
              <p className="text-xl text-gray-500 mb-4">Hi, I'm John Doe and I'm a Full Stack Developer with over 5 years of experience in the industry. I specialize in modern web development using technologies like React, Node, and GraphQL.</p>
              <p className="text-xl text-gray-500 mb-4">I have a strong passion for building web applications that are fast, efficient, and user-friendly. In my spare time, I enjoy learning about new technologies and staying up-to-date with industry best practices.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About

