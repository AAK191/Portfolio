import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white shadow-lg">

      <h1 className="text-2xl font-bold text-blue-400">
        Anusha.dev
      </h1>

      <div className="flex gap-6 text-lg">

        <Link className="hover:text-blue-400" to="/">Home</Link>
        <Link className="hover:text-blue-400" to="/about">About</Link>
        <Link className="hover:text-blue-400" to="/skills">Skills</Link>
        <Link className="hover:text-blue-400" to="/projects">Projects</Link>
        <Link className="hover:text-blue-400" to="/tasks">Tasks</Link>
        <Link className="hover:text-blue-400" to="/contact">Contact</Link>

      </div>

    </nav>
  );
}