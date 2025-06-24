import { useRef, useState } from "react";
import React from "react";
import { saveTasks } from "../storage/localStorageUtils";

const Task = ({ setTaskList, taskList }) => {
  const tasks = [...taskList];
  const taskRefs = useRef({});

  function doneTask(event, id) {
    const checked = event.target.checked;

    setTaskList((prevTasks) => {
      const taskListChecked = prevTasks.map((task) =>
        task.id === id ? { ...task, done: checked } : task
      );
      saveTasks(taskListChecked)
      return taskListChecked;
    });
  }

  const renderTask = tasks.map((task) => {
    if (!taskRefs.current[task.id]) {
      taskRefs.current[task.id] = React.createRef();
    }

    return (
      <div
        key={task.id}
        className={task.done ? "done" : "taskContainer"}
        ref={taskRefs.current[task.id]}
      >
        <input
          type="checkbox"
          checked = {task.done ? 'check' : '' }
          onChange={(e) => doneTask(e, task.id, taskRefs.current[task.id])}
        />
        <li className="task">{task.text}</li>
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
    // const indexToRemove = tasks.findIndex((task) => task.id == id);
    // tasks.splice(indexToRemove, 1);

    setTaskList((prevTaskList) => {
      const newTaskList = prevTaskList.filter((task) => task.id !== id);
      saveTasks(newTaskList);
      return newTaskList;
    });

    console.log(tasks);
  }

  function editTask(id) {
    const newText = prompt("Insira sua nova tarefa");
    const indexToEdit = tasks.findIndex((task) => task.id == id);

    if (newText.trim()) {
      tasks[indexToEdit].text = newText;
      setTaskList((prevTaskList) => {
        let newTaskList = [...prevTaskList];

        newTaskList[indexToEdit].text = newText;
        saveTasks(newTaskList);
        return newTaskList;
      });
    } else {
      alert("Tarefa nao pode ser vazia");
    }
  }

  return (
    <>
      <div>{renderTask}</div>
    </>
  );
};

export default Task;
