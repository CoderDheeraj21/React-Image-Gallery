import React, { useState } from "react";

export const SearchBar = ({setTerm}) => {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setTerm(search)
  };
  return (
    <form onSubmit={onSubmit} className="text-center mb-4 fixed top-0 left-0 right-0">
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 shadow-lg w-64 border rounded-lg"
          type="text"
          placeholder="search.."
        />
        <button className="px-2 py-3 bg-slate-500 hover:bg-slate-700 text-white rounded-r-lg">Search</button>
      </div>
    </form>
  );
};
