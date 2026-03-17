import AnimatedBackground from "../components/AnimatedBackground";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center grid-bg bg-black text-white text-center">

      <AnimatedBackground />

      <div className="relative z-10">

        <ReactTyped
  strings={["Hi, I'm Anusha K 👋"]}
  typeSpeed={80}
  showCursor={true}
  cursorChar="|"
  className="text-6xl font-bold mb-4"
/>

        <h2 className="text-3xl text-blue-400 mb-6">
          Full Stack Developer
        </h2>

        <p className="max-w-xl text-gray-300 mb-8">
          I build scalable web applications using MERN stack,
          integrate AI tools, and solve problems using Java DSA.
        </p>

      </div>

    </section>
  );
}