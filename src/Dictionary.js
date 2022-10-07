import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001929259de99374c779f2ec10edda5d2d7";
    let pexelsUrlApi = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsUrlApi, {
        headers: {
          Authorization: `Bearer ${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
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
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
