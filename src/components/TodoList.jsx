import { useEffect, useState } from "react";
import AdicionarTask from "./AdicionarTask";
import Task from "./Task";
import { loadTasks } from "../storage/localStorageUtils";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import EditInput from "./EditInput";
import ButtonBar from "./buttonBar";
import DeleteAlerts from "./DeleteAlerts";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(false);
  const [confirmAction, setConfirmAction] = useState();

  useEffect(() => {
    const savedTaskList = loadTasks();

    setTaskList(JSON.parse(savedTaskList));
  }, []);

  return (
    <>
      <div className="flex mt-10 mr-84 justify-center">
        <div className="border-1 shadow-lg shadow-black/30 w-64 h-fit p-2 mr-8 rounded-2xl">
          <Filter taskList={taskList} setTaskList={setTaskList} />
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div>
          <AdicionarTask setTaskList={setTaskList} taskList={taskList} />
          <ButtonBar setTaskList={setTaskList} taskList={taskList} />
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
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
