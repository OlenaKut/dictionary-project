import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        <i className="fa-solid fa-volume-high"></i>
      </a>{" "}
      <p className="phonetics">{props.phonetic.text}</p>
    </div>
  );
}
