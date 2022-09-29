import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  //console.log(props.result.meanings[0].definitions[0].definition);
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h1>{props.result.word}</h1>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
