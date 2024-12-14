import React, { useState } from "react";

function Search({ getData }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Write name of the film..."
      />
      <button onClick={() => getData(searchValue)}>Search</button>
    </div>
  );
}

export default Search;
