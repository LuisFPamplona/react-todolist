import { useRef } from "react";
import { loadTasks } from "/src/storage/localStorageUtils.js";

function SearchBar({ setTaskList, taskList }) {
  const inputRef = useRef();
  const tasks = JSON.parse(loadTasks());
  const prevTaskList = [...taskList]

  function searchTask() {
    const searchText = inputRef.current.value;
  
    console.log(prevTaskList.filter((task)=>task.text == searchTask))
  }

  return (
    <>
      <div className="flex align-middle justify-center mb-5 font-bold gap-2 ">
        <input
          type="text"
          className="bg-gray-50 text-center text-sm w-64 h-8  border "
          placeholder="Procurando tarefa específica?"
          ref={inputRef}
          onChange={() => searchTask(inputRef)}
        />
      </div>
    </>
  );
}

export default SearchBar;
