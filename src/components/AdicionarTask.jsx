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
      <form onSubmit={setNewTaskList}>
        <div className="border flex justify-between h-12 mb-6 p-1 w-86">
          <input
            type="text"
            placeholder="Digite sua nova tarefa"
            ref={inputRef}
            className="outline-0  w-76 text-center p-2"
          />
          <button
            onClick={setNewTaskList}
            className="w-14 flex justify-center items-center"
          >
            <Plus className="scale-180" />
          </button>
        </div>
      </form>
    </>
  );
};

export default AdicionarTask;
