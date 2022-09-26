import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
