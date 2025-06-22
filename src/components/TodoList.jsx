import { useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div>
        <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
        <Task setTaskList={setTaskList} taskList={taskList} />
      </div>
    </>
  );
};

export default TodoList;
