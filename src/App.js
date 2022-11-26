import React, { useState } from "react";
import "./styles.css";
var headingtitle = "welcome";

var emojidict = {
  "😂": "Laughing",
  "😊": "Smiling",
  "😢": "Sad",
  "❤": "heart",
  "😍": "Heart eyes",
  "🎶": "Music",
  "🤦‍♀️": "Facepalm",
  "🤷‍♂️": "Shrugging",
  "🦀": "Crab",
  "📚":"Books"
};

var emojisfromdict = Object.keys(emojidict);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiiclickhandler(emoji) {
    console.log(emoji);
    var meaning = emojidict[emoji];
    setmeaning(meaning);
  }

  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojidict[userinput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingtitle} </h1>
      <input onChange={emojiinputhandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis</h3>

      {emojisfromdict.map(function (emoji) {
        return (
          <span
            onClick={() => emojiiclickhandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
