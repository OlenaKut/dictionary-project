import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section className="shadow rounded-3">
          <h1 className="word mb-4">{props.result.word}</h1>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="shadow rounded-3">
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
