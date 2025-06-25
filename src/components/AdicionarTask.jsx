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
      
      if((newTask.text).trim()){

        setTaskList(() => {
          const newTaskList = [...taskList, newTask];
          saveTasks(newTaskList)
          return newTaskList;
        });
      }
      
      inputRef.current.focus()
      inputRef.current.value = "";
    };

    
  return (
    <>
      <div>
        <form onSubmit={setNewTaskList} className="flex">
          <input  type="text" ref={inputRef} className="border-3 rounded-2xl mr-1.5 border-amber-50 text-gray-200 text-center w-96 h-12 text-2xl "/>
          <button  onClick={setNewTaskList} className="border-2 rounded-full align-middle bg-amber-50 w-12 h-12 p-2.5 hover:bg-gray-300 transition-all cursor-pointer active:w-10 active:h-10 active:p-1.5">
          <Plus />
          </button>
        </form>
      </div>
    </>
  );
};

export default AdicionarTask;
