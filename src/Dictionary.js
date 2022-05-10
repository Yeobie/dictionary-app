import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function wordSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="fw-bold">Dictionary</h1>
      <form onSubmit={wordSearch}>
        <input
          type="search"
          placeholder="Search for..."
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
