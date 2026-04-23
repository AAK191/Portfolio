import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">

      <h1 className="text-4xl font-bold mb-10">
        Contact Me
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Email */}
        <a
          href="mailto:anusha123@gmail.com"
          className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition shadow-lg flex flex-col items-center"
        >
          <FaEnvelope className="text-blue-400 text-4xl mb-4"/>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-400">anushaakivadi9@gmail.com</p>
        </a>

        {/* Github */}
        <a
          href="https://github.com/AAK191"
          target="_blank"
          className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition shadow-lg flex flex-col items-center"
        >
          <FaGithub className="text-blue-400 text-4xl mb-4"/>
          <h3 className="text-xl font-semibold">Github</h3>
          <p className="text-gray-400">View Projects</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition shadow-lg flex flex-col items-center"
        >
          <FaLinkedin className="text-blue-400 text-4xl mb-4"/>
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <p className="text-gray-400">Let's connect</p>
        </a>

      </div>

    </section>
  );
}