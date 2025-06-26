import React, { useRef } from "react";
import styles from "../style/Filter.module.css";
import { loadTasks } from "../storage/localStorageUtils";
import { ListFilter } from "lucide-react";

function Filter({ setTaskList }) {
  const doneRef = useRef();
  const pendRef = useRef();
  const allRef = useRef();

  function filterTasks(filter) {
    const tasks = JSON.parse(loadTasks());

    if (
      !doneRef.current.checked &&
      !pendRef.current.checked &&
      !allRef.current.checked
    ) {
      setTaskList(tasks);
    } else if (filter === "done" && doneRef.current.checked === true) {
      //DONE FILTER
      pendRef.current.checked = false;
      allRef.current.checked = false;

      const doneTasks = tasks.filter((task) => task.done === true);

      setTaskList(() => doneTasks);

      //--------------------------------------------------------------
    } else if (filter === "pend" && pendRef.current.checked === true) {
      //PEND FILTER
      allRef.current.checked = false;
      doneRef.current.checked = false;

      const pendTasks = tasks.filter((task) => task.done === false);

      setTaskList(() => pendTasks);

      //--------------------------------------------------------------
    } else if (filter === "all" && allRef.current.checked === true) {
      //ALL FILTER
      doneRef.current.checked = false;
      pendRef.current.checked = false;

      setTaskList(() => tasks);

      //--------------------------------------------------------------
    }
  }

  return (
    <>
      <ListFilter />
      <div className="flex justify-center gap-4 p-4 text-gray-900 text-sm font-bold">
        <div className="flex flex-col items-center ">
          <input
            type="checkbox"
            className="cursor-pointer h-4 w-4 accent-emerald-800"
            id="allFilter"
            defaultChecked={true}
            onClick={() => filterTasks("all")}
            ref={allRef}
          />
          <span>Todas</span>
        </div>

        <div className="flex flex-col items-center ">
          <input
            type="checkbox"
            id="pendingFilter"
            className="cursor-pointer h-4 w-4 accent-emerald-800 "
            onClick={() => filterTasks("pend")}
            ref={pendRef}
          />
          <span>Pendentes</span>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="checkbox"
            id="doneFilter"
            className="cursor-pointer h-4 w-4 accent-emerald-800"
            onClick={() => filterTasks("done")}
            ref={doneRef}
          />
          <span>Concluídas</span>
        </div>
      </div>
    </>
  );
}

export default Filter;
