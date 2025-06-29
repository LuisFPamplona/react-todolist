import SearchBar from "./SearchBar";

function Footer() {
  return (
    <footer className="flex items-center justify-center align-middle gap-4 bg-gray-200 h-12">
      <p className="text-shadow-neutral-400 text-shadow-sm">LuisFPamplona®</p>
      <a href="https://github.com/LuisFPamplona">
        <img src="/react-todolist/github-mark32.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/luis-pamplona-552030310">
        <img src="/react-todolist/LI-In-Bug32.png" alt="Linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
