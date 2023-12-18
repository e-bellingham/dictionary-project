// Meanings.js
import React from "react";

export default function Meanings({ meaning }) {
  if (meaning) {
    return (
      <div className="Meanings">
        <h3>{meaning.partOfSpeech}</h3>
        <div>
          <p>{meaning.definition}</p>
          {meaning.example && (
            <p>
              <em>Example: {meaning.example}</em>
            </p>
          )}
        </div>
      </div>
    );
  } else {
    return <div>No definitions available.</div>;
  }
}
