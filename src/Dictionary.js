import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function wordSearch(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    search();
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="fw-bold">📖 Dictionary 📖</h1>
        <section>
          <h3>🔎 I'm looking for the meaning of...</h3>
          <form onSubmit={wordSearch}>
            <input
              type="search"
              placeholder="Search for..."
              defaultValue={props.defaultKeyword}
              onChange={handleKeywordChange}
            ></input>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
