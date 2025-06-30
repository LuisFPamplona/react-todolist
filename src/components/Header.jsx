function Header() {
  return (
    <>
      <header className="flex justify-between w-full pb-2 border-b">
        <img
          className="h-10"
          src="/react-todolist/logo-luista-de-tarefas.png"
          alt="logo"
        />
        <div className="flex align-middle items-center gap-4 pr-2">
          <a href="https://github.com/LuisFPamplona/react-todolist">
            <img src="/react-todolist/github-mark32.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/luis-pamplona-552030310">
            <img src="/react-todolist/LI-In-Bug32.png" alt="Linkedin" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
