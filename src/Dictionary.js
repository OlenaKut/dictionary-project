import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="serch"
          autoFocus={true}
          placeholder="Enter the word"
          onChange={handleKeywordChange}
          className="form-input rounded m-2"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-info form-submit"
        />
      </form>
      <Result result={result} />
    </div>
  );
}
