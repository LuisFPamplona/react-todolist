import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="top-0 flex justify-center gap-8 items-center align-middle w-screen h-16 bg-white bg-gradient-to-b to-gray-400">
      <div>
        <span className="text-xl">Lista de Tarefas</span>
      </div>
      <div>
        <a href="https://github.com/LuisFPamplona">
          <img src="/react-todolist/github-mark32.png" alt="GitHub" />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/luis-pamplona-552030310">
          <img src="/react-todolist/LI-In-Bug32.png" alt="Linkedin" />
        </a>
      </div>
    </header>
  );
}

export default Header;
