import { useRef, useState } from "react";
import React from "react";
import { saveTasks } from "../storage/localStorageUtils";
import { BookX, SquarePen } from "lucide-react";

const Task = ({ setTaskList, taskList }) => {
  const tasks = [...taskList];
  const taskRefs = useRef({});

  function doneTask(event, id) {
    const checked = event.target.checked;

    setTaskList((prevTasks) => {
      const taskListChecked = prevTasks.map((task) =>
        task.id === id ? { ...task, done: checked } : task
      );
      saveTasks(taskListChecked);
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
        className={
          task.done
            ? "flex justify-between p-2 items-center border-1 mb-4 list-none bg-emerald-500  hover:bg-emerald-400 shadow-lg shadow-black/30 transform hover:scale-105 transition-all"
            : "flex justify-between p-2 items-center border-1 mb-4 list-none bg-gray-100 rounded-2xl hover:bg-gray-50 transform hover:scale-105 transition-all"
        }
        ref={taskRefs.current[task.id]}
      >
        <input
          type="checkbox"
          className="accent-emerald-50 cursor-pointer h-4 w-4"
          checked={task.done ? true : false}
          onChange={(e) => doneTask(e, task.id, taskRefs.current[task.id])}
        />
        <li
          className={
            task.done ? "text-amber-50 font-bold" : "text-neutral-900 font-bold"
          }
        >
          {task.text}
        </li>

        <div className="flex flex-col p-1">
          <button
            onClick={() => removeTask(task.id, taskRefs.current[task.id])}
            className="cursor-pointer pb-1"
          >
            <BookX color="#fd3636" className="hover:scale-110 transition" />
          </button>
          <button
            onClick={() => editTask(task.id, taskRefs.current[task.id])}
            className="cursor-pointer pt-1"
          >
            <SquarePen color="#000000" className="hover:scale-110 transition" />
          </button>
        </div>
      </div>
    );
  });

  function removeTask(id) {
      setTaskList((prevTaskList) => {
        const newTaskList = prevTaskList.filter((task) => task.id !== id);
        saveTasks(newTaskList);
        return newTaskList;
      });
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
