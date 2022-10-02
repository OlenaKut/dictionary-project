import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <p className="synonym text-secondary">{synonym} </p>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
