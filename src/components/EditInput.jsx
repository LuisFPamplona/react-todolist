import { Pencil, PenOff } from "lucide-react";
import { useEffect, useRef } from "react";
import { loadTasks, saveTasks } from "../storage/localStorageUtils";

function EditInput({ setTaskList, setEdit, editId }) {
  const editRef = useRef();
  const blockRef = useRef();

  const tasks = [...JSON.parse(loadTasks())];
  const indexToEdit = tasks.findIndex((task) => task.id == editId);
  const prevText = tasks[indexToEdit].text;

  function changeText() {
    const newText = (editRef.current.value).trim();
    if (newText.trim() != "") {
      tasks[indexToEdit].text = newText;

      setTaskList(() => {
        saveTasks(tasks);
        return tasks;
      });
    }
  }

  return (
    <>
      <div className="absolute ml-8 top-30 bg-amber-50 w-94 h-36 border rounded-2xl z-20 hover:scale-105  transition-all">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEdit(false);
            changeText();
          }}
        >
          <div className="flex flex-col items-center justify-center align-middle p-4 gap-4">
            <span className=" font-bold">Edite sua tarefa</span>
            <input
              ref={editRef}
              defaultValue={prevText}
              type="text"
              className="border w-90 h-8 text-center text-sm "
              autoFocus
            />
          </div>
          <div className="flex items-center justify-around">
            <button type="button" onClick={() => setEdit(false)} className=" hover:scale-105 active:scale-85 transition-all">
              <PenOff className="border w-10 rounded-2xl bg-red-400" />
            </button>
            <button type="submit" className=" hover:scale-105 active:scale-85 transition-all" >
              <Pencil className="border w-10 rounded-2xl bg-green-400 " />
            </button>
          </div>
        </form>
      </div>
      <div
        ref={blockRef}
        className="w-screen h-screen absolute top-0 right-0 bottom-0 left-0 bg-white opacity-40 z-10 backdrop-blur-xs"
        onClick={() => setEdit(false)}
      ></div>
    </>
  );
}

export default EditInput;
