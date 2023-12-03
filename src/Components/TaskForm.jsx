import { useState, useContext } from "react";
import {TaskContext} from '../Context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description,
    });
    setTitle('')
    setDescription('')
  };
  return (
    <div className="container max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4  " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3 ">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descrpcion de la tarea"
        className="bg-slate-300 p-3 w-full mb-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
