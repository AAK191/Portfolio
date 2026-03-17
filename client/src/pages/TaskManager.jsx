import { useState, useEffect } from "react";
import { getTasks, addTask } from "../services/api";

export default function TaskManager() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // fetch tasks when page loads
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    await addTask({
      title,
      completed: false
    });

    setTitle("");
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-6">Task Manager</h1>

      <input className="p-2 text-black rounded mr-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAddTask} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Add Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
          </li>
        ))}
      </ul>

    </div>
  );
}