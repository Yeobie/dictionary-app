import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <div className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <span key={index} className="Synonyms-list">
                {synonym}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
