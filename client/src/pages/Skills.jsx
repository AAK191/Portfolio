import { FaReact, FaNodeJs, FaJava, FaServer } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import Hero from "../components/Hero";

export default function Skills() {

  const skillSections = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> }
      ]
    },
    {
      title: "Backend (Core Strength)",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Java (DSA)", icon: <FaJava /> }
      ]
    },
    {
      title: "System Design (Learning)",
      skills: [
        { name: "API Design", icon: <FaServer /> },
        { name: "Authentication & Security", icon: <FaServer /> },
        { name: "Rate Limiting & Scalability", icon: <FaServer /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
    
          <div className="mb--16">    <Hero /> </div>
      
      <h1 className="text-4xl font-bold text-center mb-6">
        Skills & Focus Areas
      </h1>

    
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        I focus on building real-world full stack applications with strong backend logic,
        while learning how to design scalable systems and optimize performance.
      </p>

      <div className="space-y-10">

        {skillSections.map((section) => (
          <div key={section.title}>
            
            {/* Section Title */}
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              {section.title}
            </h2>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              {section.skills.map((skill) => (
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
        ))}

      </div>

    </div>
    
  );
}