import { useRef } from "react";
import { saveTasks } from "../storage/localStorageUtils.js";
import { Plus } from "lucide-react";

const AdicionarTask = ({ setTaskList, taskList }) => {
  const inputRef = useRef();

  const setNewTaskList = (event) => {
    event.preventDefault();

    const newTask = {
      text: inputRef.current.value,
      id: Date.now(),
      done: false,
    };

    if (newTask.text.trim()) {
      setTaskList(() => {
        const newTaskList = [...taskList, newTask];
        saveTasks(newTaskList);
        return newTaskList;
      });
    }

    inputRef.current.focus();
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        <form
          onSubmit={setNewTaskList}
          className="flex justify-center items-center mb-4"
        >
          <input
            type="text"
            placeholder="Digite sua nova tarefa"
            ref={inputRef}
            className="border-2 border-black font-bold rounded-2xl mr-1.5
          text-gray-950 text-center bg-amber-50 shadow-lg shadow-black/30 w-72 h-12 "
          />
          <button
            onClick={setNewTaskList}
            className="border-1 rounded-full align-middle bg-amber-50 w-12 h-12 hover:bg-gray-300 transition-all cursor-pointer hover:scale-105 active:scale-90 shadow-lg shadow-black/30"
          >
            <Plus className=" scale-130 items-center ml-2.5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default AdicionarTask;
