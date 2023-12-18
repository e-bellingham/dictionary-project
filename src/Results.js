import React from "react";

export default function Results(props) {
  if (props.results) {
    return <div className="Results">green grass</div>;
  } else {
    return null;
  }
}
