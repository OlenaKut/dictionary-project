import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    //Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="shadow rounded-3">
          <h4 className="opacity-50 mb-3">What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="serch"
              autoFocus={true}
              placeholder={props.defaultKeyword}
              onChange={handleKeywordChange}
              className="form-input rounded p-1"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-info form-submit"
            />
          </form>
          <div className="keyWord opacity-50">
            Suggestes words: live, love, wine, sport...{" "}
          </div>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
