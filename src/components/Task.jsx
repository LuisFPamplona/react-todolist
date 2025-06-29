import { useEffect, useRef, useState } from "react";
import React from "react";
import { saveTasks } from "../storage/localStorageUtils";
import { BookX, SquarePen } from "lucide-react";

const Task = ({
  setTaskList,
  taskList,
  setEdit,
  setEditId,
  searchText,
  setAlert,
  setDeleteId,
  setAction,
  setAlertText,
}) => {
  //const tasks = [...taskList];
  const filteredTasks = taskList.filter((task) =>
    task.text.toLowerCase().includes(searchText.toLowerCase())
  );
  const taskRefs = useRef({});
  const [draggedTaskId, setDraggedTaskId] = useState(null);

  function handleDragStart(e, id) {
    setDraggedTaskId(id);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e, targetId) {
    const draggedIndex = taskList.findIndex(
      (task) => task.id === draggedTaskId
    );
    const targetIndex = taskList.findIndex((task) => task.id === targetId);

    if (draggedIndex === -1 || targetId === -1) return;

    const updatedTasks = [...taskList];
    const [draggedItem] = updatedTasks.splice(draggedIndex, 1);
    updatedTasks.splice(targetIndex, 0, draggedItem);

    setTaskList(updatedTasks);
    saveTasks(updatedTasks);
    setDraggedTaskId(null);
  }

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

  const renderTask = filteredTasks.map((task) => {
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
        draggable
        onDragStart={(e) => handleDragStart(e, task.id)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, task.id)}
      >
        <input
          type="checkbox"
          className="accent-emerald-50 cursor-pointer h-4 w-4"
          checked={task.done ? true : false}
          onChange={(e) => doneTask(e, task.id, taskRefs.current[task.id])}
        />
        <li
          ref={taskRefs.current[task.id]}
          className={
            task.done
              ? "text-amber-50 font-bold p-4 max-w-96 text-center"
              : "text-neutral-900 font-bold p-4 max-w-96 text-center"
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
    setAlertText("Quer mesmo remover essa tarefa?");
    setAlert(true);
    setDeleteId(id);
    setAction("removeTask");
  }

  function editTask(id) {
    setEdit(true);
    setEditId(id);
  }

  return (
    <>
      <div>{renderTask}</div>
    </>
  );
};

export default Task;
