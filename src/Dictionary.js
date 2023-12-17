import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(event) {
  let [keyword, setKeyword] = useState(" ");
  const axios = require("axios");

  const apiKey = "26abe423762oeff8b3623ddt062bace3";
  const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiURL).then(handleResponse);

  function handleResponse(response) {
    console.log(response);
  }

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
