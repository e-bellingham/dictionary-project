import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "26abe423762oeff8b3623ddt062bace3";
    const apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleDictionaryResponse);

    const apiPhotoKey = "26abe423762oeff8b3623ddt062bace3";
    const apiPhotoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiPhotoKey}`;
    axios.get(apiPhotoUrl).then(handlePhotoResponse);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }
  return (
    <div className="Dictionay">
      <section>
        <h4>What word do you want to look up?</h4>
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
      <Photos photos={photos} />
    </div>
  );
}
