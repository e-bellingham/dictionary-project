import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "26abe423762oeff8b3623ddt062bace3";
    const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionay">
      <section>
        <p>What word do you want to look up?</p>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="submit" className="fa-solid fa-magnifying-glass" />
        </form>
        <small>suggested words: sunset, wine, yoga...</small>
      </section>
      {results && <Results results={results} />}
    </div>
  );
}
