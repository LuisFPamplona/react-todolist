import { Trash2, SquareCheck, Square, Rows3 } from "lucide-react";
import { saveTasks } from "../storage/localStorageUtils";

function ButtonBar({ taskList, setTaskList }) {
  function deleteTasks(which) {
    switch (which) {
      case "del_all":
        setTaskList(() => {
          const newTaskList = [];
          saveTasks(newTaskList);
          return newTaskList;
        });
        break;
      case "del_done":
        setTaskList((prev) => {
          const newTaskList = prev.filter((task) => task.done == false);
          saveTasks(newTaskList);
          return newTaskList;
        });
        break;
      case "del_pend":
        setTaskList((prev) => {
          const newTaskList = prev.filter((task) => task.done == true);
          saveTasks(newTaskList);
          return newTaskList;
        });
        break;
    }
  }

  function checkTasks(which) {
    switch (which) {
      case "check_all":
        setTaskList((prev) => {
          const newTaskList = prev.map((task) =>
            task.done ? task : { ...task, done: true }
          );
          saveTasks(newTaskList);
          return newTaskList;
        });

        break;
      case "uncheck_all":
        setTaskList((prev) => {
          const newTaskList = prev.map((task) =>
            !task.done ? task : { ...task, done: false }
          );
          saveTasks(newTaskList);
          return newTaskList;
        });
        break;
    }
  }

  return (
    <>
      <div className="border-b-2 flex justify-between mb-2">
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => deleteTasks("del_all")}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <Trash2 color="red" />
            <span>Todas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => deleteTasks("del_done")}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <SquareCheck color="red" />
            <span>Concluídas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => deleteTasks("del_pend")}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <Square color="red" />
            <span>Pendentes</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => checkTasks("check_all")}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Concluír</span>
            <Rows3 color="rgb(16 185 129)" />
            <span>Todas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => checkTasks("uncheck_all")}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Desmarcar</span>
            <Rows3 />
            <span>Todas</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonBar;
