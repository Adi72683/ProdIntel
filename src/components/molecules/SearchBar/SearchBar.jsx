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
        className="w-64 py-4 rounded-xl bg-violet-600 text-white text-2xl font-semibold hover:bg-violet-500 transition"
        onClick={() => onSearch(query)}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;