import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4> {props.meanings.partOfSpeech}</h4>
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              <strong> Definition:</strong>
              {definitions.definition}
              <br />
              <em> {definitions.example}</em>
            </p>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
