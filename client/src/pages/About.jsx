import { FaUserAlt, FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center p-10 text-white">

      <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-10 max-w-4xl shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <FaUserAlt className="text-4xl text-blue-400" />
          <h1 className="text-4xl font-bold">
            Hi, I'm Anusha
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-blue-400 text-lg mb-4">
          Full Stack Developer | MERN | System Design Enthusiast
        </p>

        {/* Description */}
        <p className="text-gray-300 leading-7 mb-6">
          I build full-stack web applications inspired by real-world platforms like 
          <span className="text-blue-400 font-semibold"> GitHub</span>, 
          <span className="text-blue-400 font-semibold"> Airbnb</span>, and 
          <span className="text-blue-400 font-semibold"> Zerodha</span>.
          My focus is not just building UI, but understanding how systems work 
          behind the scenes and scaling them efficiently.
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          Currently, I am diving deeper into 
          <span className="text-blue-400"> system design</span>, backend architecture, 
          and improving problem-solving skills using 
          <span className="text-blue-400"> Data Structures & Algorithms (Java)</span>.
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          I am actively looking for an 
          <span className="text-blue-400 font-semibold"> Software Development Internship</span> 
          where I can contribute, learn from real-world systems, and grow as an engineer.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaCode className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Projects
            </h3>
            <p className="text-gray-400">
              Built real-world clones like GitHub, Airbnb, and Zerodha 
              with authentication, APIs, and scalable backend logic.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaServer className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              System Design Focus
            </h3>
            <p className="text-gray-400">
              Learning how large-scale systems work — caching, rate limiting, 
              databases, and backend architecture.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaLaptopCode className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-400">
              Strong foundation in DSA using Java with focus on 
              writing optimized and clean solutions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaUserAlt className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Career Goal
            </h3>
            <p className="text-gray-400">
              To become a backend-focused engineer who builds scalable 
              and efficient systems used by thousands of users.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}