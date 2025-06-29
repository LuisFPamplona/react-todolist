import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";
import { loadTasks } from "../storage/localStorageUtils";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import EditInput from "./EditInput";
import ButtonBar from "./buttonBar";
import DeleteAlerts from "./DeleteAlerts";
import Footer from "./Footer";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(false);
  const [confirmAction, setConfirmAction] = useState();
  const [action, setAction] = useState();
  const [alertText, setAlertText] = useState();
  const [divDisplay, setDivDisplay] = useState("hidden");
  useEffect(() => {
    if (loadTasks() == undefined) {
      console.error("tasklist vazia");
    } else {
      const savedTaskList = loadTasks();

      setTaskList(JSON.parse(savedTaskList));
    }
  }, []);

  return (
    <>
      <div className="flex mt-2 items-center justify-center relative">
        <div>
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            divDisplay={divDisplay}
            setDivDisplay={setDivDisplay}
          />
          <ButtonBar
            setTaskList={setTaskList}
            setAlert={setAlert}
            setAction={setAction}
            setAlertText={setAlertText}
          />
          <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
          <Task
            confirmAction={confirmAction}
            setConfirmAction={setConfirmAction}
            setAlert={setAlert}
            setTaskList={setTaskList}
            taskList={taskList}
            setEdit={setEdit}
            setEditId={setEditId}
            searchText={searchText}
            setDeleteId={setDeleteId}
            setAction={setAction}
            setAlertText={setAlertText}
          />
          {edit && (
            <EditInput
              setTaskList={setTaskList}
              setEdit={setEdit}
              editId={editId}
            />
          )}
          {alert && (
            <DeleteAlerts
              alert={alert}
              setAlert={setAlert}
              setTaskList={setTaskList}
              deleteId={deleteId}
              action={action}
              alertText={alertText}
            />
          )}
          <div className="absolute top-0 ml-65 mt-10 ">
            <Filter
              taskList={taskList}
              setTaskList={setTaskList}
              divDisplay={divDisplay}
            />
          </div>
          <div className="fixed bottom-0 left-0 right-0 w-full border-t">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
