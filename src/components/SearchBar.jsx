import { useRef } from "react";
import { loadTasks } from "/src/storage/localStorageUtils.js";

function SearchBar({ searchText, setSearchText }) {
  return (
    <>
      <div className="flex align-middle justify-center mb-5 font-bold gap-2 ">
        <input
          type="text"
          placeholder="Procurando tarefa específica?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-gray-50 text-center text-sm w-64 h-8  border "
        />
      </div>
    </>
  );
}

export default SearchBar;
