import React from "react";
import "./Meanings.css";
export default function Meanings({ meaning }) {
  if (meaning) {
    return (
      <div className="Meanings">
        <p>
          <strong>Definition:</strong>
          {meaning.definition}
          <br />
          <strong>Part of Speech:</strong>
          {meaning.partOfSpeech}
          <br />
          <strong>Example:</strong>
          {meaning.example}
          <br />
          <strong>Synonyms:</strong>
          {meaning.synonyms}
        </p>
      </div>
    );
  } else {
    return <div>No definitions available.</div>;
  }
}
