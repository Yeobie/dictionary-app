import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics mb-2">
        <br />
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {" "}
          Listen
        </a>
        <span className="Ipa">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return (
      <div className="Phonetics mb-3">
        <br />

        <span className="no-audio"> (No audio file) </span>
        <span className="Ipa">{props.phonetic.text}</span>
      </div>
    );
  }
}
