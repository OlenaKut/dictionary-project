import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        <i class="fa-solid fa-volume-high"></i>
      </a>{" "}
      <p className="phonetics">{props.phonetic.text}</p>
    </div>
  );
}
