import React from "react";
import styles from "../style/Filter.module.css";

function Filter({
  setIsCheckedAll,
  isCheckedAll,
  setisCheckedPending,
  isCheckedPending,
  setIsCheckedDone,
  isCheckedDone,
}) {
  return (
    <>
      <div className="flex justify-center gap-12 p-4 text-amber-50 text-sm font-bold">
        <div className="flex flex-col items-center">
          <input
            type="checkbox"
            className="cursor-pointer h-4 w-4"
            id="allFilter"
            checked={isCheckedAll}
            defaultChecked={true}
          />
          <span>Todas</span>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="checkbox"
            id="pendingFilter"
            className="cursor-pointer h-4 w-4 items-center"
            checked={isCheckedPending}
          />
          <span>Pendentes</span>
        </div>

        <div className="flex flex-col items-center">
          <input
            type="checkbox"
            id="doneFilter"
            className="cursor-pointer h-4 w-4 items-center"
            checked={isCheckedDone}
          />
          <span>Concluídas</span>
        </div>
      </div>
    </>
  );
}

export default Filter;
