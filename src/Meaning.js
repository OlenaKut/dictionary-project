import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech text-capitalize rounded text-info">
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <span className="opacity-75">Definition:</span>
              {definition.definition}
            </div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
