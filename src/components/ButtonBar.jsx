import { Trash2, SquareCheck, Square, Rows3 } from "lucide-react";
import { saveTasks } from "../storage/localStorageUtils";

function ButtonBar({ setAction, setAlert, setAlertText }) {
  return (
    <>
      <div className="border-b-2 flex justify-between mb-2">
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => {
              setAlertText('Quer mesmo remover TODAS as tarefas?')
              setAlert(true);
              setAction("removeAll");
            }}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <Trash2 color="red" />
            <span>Todas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => {
              setAlertText('Quer mesmo remover TODAS as tarefas CONCLUÍDAS?')
              setAlert(true);
              setAction("removeDone");
            }}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <SquareCheck color="red" />
            <span>Concluídas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => {
              setAlertText('Quer mesmo remover TODAS as tarefas PENDENTES?')
              setAlert(true);
              setAction("removePend");
            }}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Excluír</span>
            <Square color="red" />
            <span>Pendentes</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => {
              setAlertText('Quer mesmo marcar TODAS as tarefas como CONCLUÍDAS?')
              setAlert(true);
              setAction("doneAll");
            }}
            className="cursor-pointer flex flex-col items-center justify-center align-middle w-20 "
          >
            <span>Concluír</span>
            <Rows3 color="rgb(16 185 129)" />
            <span>Todas</span>
          </button>
        </div>
        <div className="text-sm font-bold text-center hover:scale-110 active:scale-95 transition-all">
          <button
            onClick={() => {
              setAlertText('Quer mesmo marcar TODAS as tarefas como PENDENTES?')
              setAlert(true);
              setAction("undoneAll");
            }}
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
