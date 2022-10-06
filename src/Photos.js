import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos shadow rounded-3">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={photo.src.landscape}
                    alt="Word"
                    className="img-fluid rounded m-2"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
