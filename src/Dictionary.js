import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(event) {
  let [keyword, setKeyword] = useState(" ");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}....`);
  }

  return (
    <div className="Dictionay">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <h1>Hello</h1>
    </div>
  );
}
