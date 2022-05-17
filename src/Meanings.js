import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  if (props.meanings.definitions.synonyms) {
    return (
      <div className="Meanings">
        <h4> {props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div key={index} className="Definition">
              <div>
                {" "}
                {definitions.definition}
                <br />
                <em> {definitions.example}</em>
              </div>

              <Synonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Meanings">
        <section>
          <h4> {props.meanings.partOfSpeech}</h4>
          {props.meanings.definitions.map(function (definitions, index) {
            return (
              <div key={index} className="Definition">
                <p>
                  {" "}
                  <strong> </strong>
                  {definitions.definition}
                  <br />
                  <em> {definitions.example}</em>
                </p>
              </div>
            );
          })}

          <Synonyms synonyms={props.meanings.synonyms} />
        </section>
      </div>
    );
  }
}
