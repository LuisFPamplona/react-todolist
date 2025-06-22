import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);

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
