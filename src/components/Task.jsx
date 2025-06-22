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
        <div className="buttonContainer">
          <button
            onClick={() => removeTask(task.id, taskRefs.current[task.id])}
          >
            Delete
          </button>
          <button onClick={() => editTask(task.id, taskRefs.current[task.id])}>
            Editar
          </button>
        </div>
      </div>
    );
  });

  function removeTask(id) {
    const indexToRemove = tasks.findIndex((task) => task.id == id);
    tasks.splice(indexToRemove, 1);

    setTaskList((prevTaskList) => {
      const newTaskList = prevTaskList.filter((task) => task.id !== id);
      return newTaskList;
    });

    console.log(tasks);
  }

  function editTask(id) {
    const newText = prompt("Insira sua nova tarefa");
    const indexToEdit = tasks.findIndex((task) => task.id == id);
    newText
      ? (tasks[indexToEdit].text = newText)
      : alert("Tarefa nao pode ser vazia");

    setTaskList((prevTaskList) => {
      let newTaskList = [...prevTaskList];

      newTaskList[indexToEdit].text = newText;
      return newTaskList;
    });
  }

  return (
    <>
      <div>{renderTask}</div>
    </>
  );
};

export default Task;
