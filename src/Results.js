import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results && Array.isArray(props.results.meanings)) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>/{props.results.phonetic}/</h3>
        </section>
        <section>
          {props.results.meanings.map((meaning, index) => (
            <Meanings key={index} meaning={meaning} />
          ))}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
