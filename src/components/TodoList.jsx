import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";
import { loadTasks } from "../storage/localStorageUtils";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedTaskList = loadTasks();

    setTaskList(JSON.parse(savedTaskList));
  }, []);

  return (
    <>
      <div className="flex mt-24 mr-84 justify-center">
        <div className="border-1 shadow-lg shadow-black/30 w-64 h-fit p-2 mr-8 rounded-2xl">
          <Filter taskList={taskList} setTaskList={setTaskList} />
          <SearchBar setTaskList={setTaskList} taskList={taskList} />
        </div>
        <div>
          <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
          <Task setTaskList={setTaskList} taskList={taskList} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
