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
    const newText = editRef.current.value.trim();
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 w-80 h-28 border z-20 hover:scale-105  transition-all">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEdit(false);
            changeText();
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex align-middle items-center justify-center w-60 mb-2">
              <span className="text-black text-shadow-gray-300 text-shadow-sm">
                Mudou de idéia? ツ
              </span>
            </div>
            <div className="border flex align-middle justify-between items-center w-76 h-12  pl-1 pr-1">
              <input
                ref={editRef}
                defaultValue={prevText}
                type="text"
                className="border-0 outline-0 h-8 text-center p-2 text-[8pt] w-62 "
                autoFocus
              />
              <button
                type="submit"
                className="flex items-center justify-center border rounded-full bg-emerald-400 w-10 h-10 hover:scale-105 active:scale-85 transition-all"
              >
                <Pencil color="white" />
              </button>
            </div>
            <p className="text-[7pt] font-bold mt-3">
              * Para cancelar a edição, clique fora da janela{" "}
            </p>
            {/* <button
              type="button"
              onClick={() => setEdit(false)}
              className=" hover:scale-105 active:scale-85 transition-all"
            >
              <PenOff className="border w-10 rounded-2xl bg-red-400" />
            </button> */}
          </div>
        </form>
      </div>
      <div
        ref={blockRef}
        className="w-screen h-screen absolute top-0 right-0 bottom-0 left-0 bg-white opacity-40 z-10 backdrop-blur-3xl"
        onClick={() => setEdit(false)}
      ></div>
    </>
  );
}

export default EditInput;
