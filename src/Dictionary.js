import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function wordSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
