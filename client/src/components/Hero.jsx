import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="hero flex flex-col gap-5 mb-16">

      <h1>Hello I'm Anusha 👋</h1>

      <h2>Full Stack Developer</h2>

      <p>
        MERN Stack Developer building scalable web apps and
        AI-powered tools.
      </p>
      
      <div className="buttons">

        <a href="https://github.com/AAK191" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Github
        </a>

        <a href="/projects"     className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
>
          View Projects
        </a>
      
       <motion.a
    href="/resume.pdf"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
  >
    Download Resume
  </motion.a>
  
      </div>

    </section>
  );

}