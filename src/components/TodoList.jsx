import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";
import { loadTasks } from "../storage/localStorageUtils";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedTaskList = loadTasks();

    setTaskList(JSON.parse(savedTaskList));
  }, []);

  return (
    <>
      <div className="toDoList">
        <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
        <Task setTaskList={setTaskList} taskList={taskList} />
      </div>
    </>
  );
};

export default TodoList;
