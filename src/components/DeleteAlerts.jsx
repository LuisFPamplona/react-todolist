import { Check, X } from "lucide-react";
import { loadTasks, saveTasks } from "../storage/localStorageUtils";

function DeleteAlerts({ setAlert, setTaskList, deleteId }) {
  //-
  const idToDelete = deleteId;

  function removeTask(id) {
    setTaskList((prevTaskList) => {
      const newTaskList = prevTaskList.filter((task) => task.id !== id);
      saveTasks(newTaskList);
      setAlert(false)
      return newTaskList;
    });
  }

  return (
    <>
      <div className="absolute ml-8 top-30 bg-amber-50 w-94 h-24 border rounded-2xl z-20 hover:scale-105  transition-all">
        <div>
          <div className="flex flex-col items-center justify-center align-middle p-4 gap-4">
            <span className=" font-bold">Quer mesmo fazer isso?</span>
          </div>
          <div className="flex items-center justify-around">
            <button
              onClick={() => setAlert(false)}
              type="button"
              className=" hover:scale-105 active:scale-85 transition-all"
            >
              <X className="border w-10 rounded-2xl bg-red-400" />
            </button>
            <button
              onClick={() => removeTask(idToDelete)}
              className=" hover:scale-105 active:scale-85 transition-all"
            >
              <Check className="border w-10 rounded-2xl bg-green-400 " />
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setAlert(false)}
        className="w-screen h-screen absolute top-0 right-0 bottom-0 left-0 bg-white opacity-40 z-10 backdrop-blur-3xl"
      ></div>
    </>
  );
}

export default DeleteAlerts;
