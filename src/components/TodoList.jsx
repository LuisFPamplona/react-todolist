import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";
import { loadTasks } from "../storage/localStorageUtils";
import Filter from "./Filter";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState();
  const [isCheckedPending, setisCheckedPending] = useState();
  const [isCheckedDone, setIsCheckedDone] = useState();

  useEffect(() => {
    const savedTaskList = loadTasks();

    setTaskList(JSON.parse(savedTaskList));
  }, []);

  return (
    <>
      <div className="pb-6">
        <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
        <Filter
          setIsCheckedAll={setIsCheckedAll}
          isCheckedAll={isCheckedAll}
          setisCheckedPending={setisCheckedPending}
          isCheckedPending={isCheckedPending}
          setIsCheckedDone={setIsCheckedDone}
          isCheckedDone={isCheckedDone}
        />
        <Task setTaskList={setTaskList} taskList={taskList} />
      </div>
    </>
  );
};

export default TodoList;
