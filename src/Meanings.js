import React from "react";
import "./Meanings.css";
export default function Meanings({ meaning }) {
  if (meaning) {
    return (
      <div className="Meanings">
        <p>
          <strong className="partOfSpeech">- {meaning.partOfSpeech} -</strong>
          <br />
          <strong>Definition:</strong>
          {meaning.definition}
          <br />
          <strong>Example:</strong>
          {meaning.example}
          <br />
          <strong>Synonyms:</strong>
          {meaning.synonyms}
        </p>
        <hr />
      </div>
    );
  } else {
    return <div>No definitions available.</div>;
  }
}
