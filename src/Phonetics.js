import React from "react";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <br />
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          {" "}
          Listen
        </a>
        {props.phonetic.text}
      </div>
    );
  } else {
    return <div className="Phonetics">{props.phonetic.text}</div>;
  }
}
