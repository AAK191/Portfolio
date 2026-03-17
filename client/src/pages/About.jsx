import { FaUserAlt, FaCode, FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center p-10 text-white">

      <div className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-10 max-w-4xl shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <FaUserAlt className="text-4xl text-blue-400" />
          <h1 className="text-4xl font-bold">
            About Me
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-7 mb-6">
          Hi, I'm <span className="text-blue-400 font-semibold">Anusha</span>,
          a passionate <span className="text-blue-400">Full Stack Developer</span>.
          I enjoy building scalable web applications using the
          <span className="text-blue-400"> MERN stack</span> and integrating
          AI tools into modern web platforms.
        </p>

        <p className="text-gray-300 leading-7 mb-6">
          I focus on writing clean, maintainable code and solving
          challenging problems using <span className="text-blue-400">Java DSA</span>.
          My goal is to build impactful products that combine
          technology, creativity, and performance.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaCode className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              MERN Development
            </h3>
            <p className="text-gray-400">
              Building full stack applications using MongoDB,
              Express, React and Node.js.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <FaLaptopCode className="text-blue-400 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-400">
              Strong foundation in Data Structures and Algorithms
              using Java.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}