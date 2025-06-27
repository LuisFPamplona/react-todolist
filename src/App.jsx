import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div>
        <header className="top-0 flex justify-center gap-8 items-center align-middle w-screen h-16 bg-white bg-gradient-to-b to-gray-400">
          <div>
            <span className="text-xl">Lista de Tarefas</span>
          </div>
          <div>
            <a href="https://github.com/LuisFPamplona">
              <img src="public\github-mark32.png" alt="github logo" />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/luis-pamplona-552030310">
              <img src="public\LI-In-Bug32.png" alt="linkedin logo" />
            </a>
          </div>
        </header>
        <div>
          <div className="mb-12">
            <TodoList />
          <div className="text-center">
            <p>LuisFPamplona®</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
