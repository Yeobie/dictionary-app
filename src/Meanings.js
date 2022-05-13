import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4> {props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {definitions.definition}
              <br />
              <em>{definitions.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
