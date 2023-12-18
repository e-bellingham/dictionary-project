import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results && Array.isArray(props.results.meanings)) {
    return (
      <div className="Results">
        <h2>"{props.results.word}"</h2>
        {props.results.meanings.map((meaning, index) => (
          <Meanings key={index} meaning={meaning} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
