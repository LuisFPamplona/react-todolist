import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div>
        <div className=" flex flex-col">
          <div>
          </div>
          <div>
            <TodoList />
          </div>
        <footer className="fixed bottom-0 flex justify-center gap-8 items-center align-middle w-screen h-16 bg-gray-50">
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
                <div>
                    <p>LuisFPamplona®</p>
                </div>
            </footer>
        </div>
      </div>
    </>
  );
}

export default App;
