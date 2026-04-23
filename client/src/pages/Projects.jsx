import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-bold text-blue-400 mb-2">
            Airbnb Clone
          </h2>

          <p className="text-gray-300 mb-4">
            Full stack MERN booking platform
          </p>

          <a
            href="https://github.com/AAK191/Wanderlust"
            className="flex items-center gap-2 text-blue-400"
          >
            <FaGithub /> View Repo
          </a>

        </div>


        
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-bold text-blue-400 mb-2">
            DSA Leetcode
          </h2>

          <p className="text-gray-300 mb-4">
            DSA in java
          </p>

          <a
            href="https://leetcode.com/u/sha_aka_AAK/"
            className="flex items-center gap-2 text-blue-400"
          >
            <FaGithub /> View Leetcode Score
          </a>

        </div>


<div className="bg-gray-900 p-6 rounded-xl shadow-lg">

  <h2 className="text-xl font-bold text-blue-400 mb-2">
    Stock Trading Platform
  </h2>

  <p className="text-gray-300 mb-4">
    Built a full stack stock trading application inspired by Zerodha, 
    with real-time-like data handling, user authentication, and 
    portfolio management features.
  </p>

  <a
    href="https://github.com/AAK191/stock-trading"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-400"
  >
    <FaGithub /> View Project
  </a>

</div>


<div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">

  <h2 className="text-xl font-bold text-blue-400 mb-2">
    GitHub (Full Stack)
  </h2>

  <p className="text-gray-300 mb-2">
    Built a GitHub-like platform with repository management, issue tracking, 
    and user authentication, focusing on backend architecture and API design.
  </p>

  <p className="text-gray-400 text-sm mb-4">
    Tech: React, Node.js, Express, MongoDB
  </p>

  <a
    href="https://github.com/AAK191/My-github"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-400"
  >
    <FaGithub /> View Code
  </a>

</div>

<div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">

  <h2 className="text-xl font-bold text-blue-400 mb-2">
    Video Conferencing 
  </h2>

  <p className="text-gray-300 mb-2">
    Built a real-time video conferencing application enabling peer-to-peer 
    communication, focusing on low-latency interaction and live data exchange.
  </p>

  <p className="text-gray-400 text-sm mb-4">
    Tech: React, Node.js, WebRTC / Socket.io
  </p>

  <a
    href="https://github.com/AAK191/video-conferencing"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-blue-400"
  >
    <FaGithub /> View Code
  </a>

</div>

<div className="bg-gray-900 p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-bold text-blue-400 mb-2">
            Placing Order Agent
          </h2>

          <p className="text-gray-300 mb-4">
            AI chatbot integration for hotel ordering
          </p>

          <a
            href="https://github.com/AAK191/Hotel-Order-Agent"
            className="flex items-center gap-2 text-blue-400"
          >
            <FaGithub /> View Repo
          </a>

        </div>

      </div>

    </div>
  );
}