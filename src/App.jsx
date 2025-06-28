import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
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
