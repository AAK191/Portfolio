export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-xl font-bold text-blue-400 mb-2">
        {title}
      </h3>

      <p className="text-gray-300 mb-4">
        {desc}
      </p>

      <a
        href={link}
        className="text-blue-400 hover:underline"
      >
        View Repository
      </a>

    </div>
  );
}