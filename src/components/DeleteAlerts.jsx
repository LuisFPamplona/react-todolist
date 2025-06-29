import { Check, X } from "lucide-react";
import { loadTasks, saveTasks } from "../storage/localStorageUtils";
import { useState } from "react";

function DeleteAlerts({ setAlert, setTaskList, deleteId, action, alertText }) {
  //-
  const idToDelete = deleteId;

  function actionType(action) {
    switch (action) {
      case "removeTask":
        removeTask(idToDelete);
        break;
      case "removeAll":
        deleteTasks(action);
        break;
      case "removeDone":
        deleteTasks(action);
        break;
      case "removePend":
        deleteTasks(action);
        break;
      case "doneAll":
        checkTasks(action);
        break;
      case "undoneAll":
        checkTasks(action);
        break;
    }
  }

  function removeTask(id) {
    setTaskList((prevTaskList) => {
      const newTaskList = prevTaskList.filter((task) => task.id !== id);
      saveTasks(newTaskList);
      setAlert(false);
      return newTaskList;
    });
  }

  function deleteTasks(action) {
    switch (action) {
      case "removeAll":
        setTaskList(() => {
          const newTaskList = [];
          saveTasks(newTaskList);
          setAlert(false);
          return newTaskList;
        });
        break;
      case "removeDone":
        setTaskList((prev) => {
          const newTaskList = prev.filter((task) => task.done == false);
          saveTasks(newTaskList);
          setAlert(false);
          return newTaskList;
        });
        break;
      case "removePend":
        setTaskList((prev) => {
          const newTaskList = prev.filter((task) => task.done == true);
          saveTasks(newTaskList);
          setAlert(false);
          return newTaskList;
        });
        break;
    }
  }

  function checkTasks(action) {
    switch (action) {
      case "doneAll":
        setTaskList((prev) => {
          const newTaskList = prev.map((task) =>
            task.done ? task : { ...task, done: true }
          );
          saveTasks(newTaskList);
          setAlert(false);
          return newTaskList;
        });

        break;
      case "undoneAll":
        setTaskList((prev) => {
          const newTaskList = prev.map((task) =>
            !task.done ? task : { ...task, done: false }
          );
          saveTasks(newTaskList);
          setAlert(false);
          return newTaskList;
        });
        break;
    }
  }

  return (
    <>
      <div className="absolute bg-amber-50 w-80 h-28 border rounded-2xl z-20 hover:scale-105  transition-all top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <div className="flex flex-col items-center justify-center align-middle p-2 gap-4">
            <span className="font-bold text-center">{alertText}</span>
          </div>
          <div className="flex items-center justify-around">
            <button
              onClick={() => setAlert(false)}
              type="button"
              className=" hover:scale-105 active:scale-85 transition-all"
            >
              <X className="border w-10 rounded-2xl bg-red-400 h-10" />
            </button>
            <button
              onClick={() => actionType(action)}
              className=" hover:scale-105 active:scale-85 transition-all"
            >
              <Check className="border w-10 rounded-2xl bg-green-400 h-10" />
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setAlert(false)}
        className="w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-white opacity-40 z-10 backdrop-blur-3xl"
      ></div>
    </>
  );
}

export default DeleteAlerts;
