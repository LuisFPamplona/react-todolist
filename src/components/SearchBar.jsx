import { useRef } from "react";
import { loadTasks } from "/src/storage/localStorageUtils.js";
import { Search, Funnel } from "lucide-react";

function SearchBar({ searchText, setSearchText, setDivDisplay, divDisplay }) {
  function decideDisplay() {
    if (divDisplay == "hidden") {
      setDivDisplay(null);
    } else {
      setDivDisplay("hidden");
    }
  }
  return (
    <>
      <div className="flex align-middle justify-center gap-6 items-center mb-1.5 font-bold h-12">
        <div className="flex gap-2 border pl-2">
          <Search />
          <input
            type="text"
            placeholder="Procurando tarefa específica?"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="text-[10pt]  bg-transparent w-50 outline-0"
          />
        </div>
        <button onClick={decideDisplay}>
          <Funnel className="w-6 h-6 hover:scale-115 active:scale-95" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
