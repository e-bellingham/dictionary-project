import React from "react";
import "./Photo.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <img
              className="img-fluid"
              key={index}
              src={photo.src.landscape}
              alt={photo.alt}
            />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
