import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Java DSA", icon: <FaJava /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-900 p-6 rounded-lg text-center hover:bg-blue-600 transition"
          >

            <div className="text-4xl mb-3 flex justify-center">
              {skill.icon}
            </div>

            <p className="text-lg">{skill.name}</p>

          </div>
        ))}

      </div>

    </div>
  );
}