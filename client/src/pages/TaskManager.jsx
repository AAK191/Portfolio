import { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../services/api";

export default function TaskManager() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTasks();
  }, [page]);

  const fetchTasks = async () => {
    const res = await getTasks(page);
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    if (!title) return;

    await addTask({ title, completed: false });
    setTitle("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task._id, {
      completed: !task.completed
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-6">Task Manager</h1>

      <input
        className="p-2 text-black rounded mr-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />

      <button
        onClick={handleAddTask}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>

      {/* Task List */}
      <ul className="mt-6 space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center bg-gray-800 p-3 rounded">

            <span
              onClick={() => toggleComplete(task)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.title}
            </span>

            <button
              onClick={() => handleDelete(task._id)}
              className="text-red-400"
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="mt-6 flex gap-3">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

    </div>
  );
}