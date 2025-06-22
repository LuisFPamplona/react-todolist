import { useRef } from "react";

const AdicionarTask = ({ setTaskList, taskList }) => {
  const inputRef = useRef();

  const setNewTaskList = (event) => {
      event.preventDefault();

      const newTask = {
        text: inputRef.current.value,
        id: Date.now(),
        done: false,
      };
      
      if((newTask.text).trim()){

        setTaskList(() => {
          const newTaskList = [...taskList, newTask];
          return newTaskList;
        });
      }
      
      inputRef.current.value = "";
    };

    
  return (
    <>
      <div>
        <form onSubmit={setNewTaskList} className="taskInput">
          <input  type="text" ref={inputRef} autoFocus />
          <button  onClick={setNewTaskList}>Adicionar</button>
        </form>
      </div>
    </>
  );
};

export default AdicionarTask;
