import { useRef } from "react";
import React from "react";

const Task = ({ setTaskList, taskList }) => {
  const tasks = [...taskList];
  const taskRefs = useRef({});

  const renderTask = tasks.map((task) => {
    if (!taskRefs.current[task.id]) {
      taskRefs.current[task.id] = React.createRef();
    }

    return (
      <div
        key={task.id}
        className="taskContainer"
        ref={taskRefs.current[task.id]}
      >
        <li>{task.text}</li>
        <button onClick={() => removeTask(task.id, taskRefs.current[task.id])}>
          Delete
        </button>
      </div>
    );
  });

  function removeTask(id, ref) {
    const indexToRemove = tasks.findIndex((task) => task.id == id);
    tasks.splice(indexToRemove, 1);


    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== id)
    );

    console.log(tasks);
  }

  return (
    <>
      <div>{renderTask}</div>
    </>
  );
};

export default Task;
