import { useState } from "react";
import Input from "../../atoms/Input/Input";

function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-4">

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full bg-[#111827] text-white p-4 rounded-xl outline-none border border-gray-700"
      />

      <button
        className="bg-purple-600 px-6 py-4 rounded-xl"
        onClick={() => onSearch(query)}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;