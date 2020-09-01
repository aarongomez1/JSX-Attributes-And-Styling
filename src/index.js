import React from "react";
import ReactDOM from "react-dom";

// const imgLoc =
//   "https://townsquare.media/site/366/files/2018/05/Slayer.jpg?w=980&q=75";

const imgLoc = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <ul>
      <img className="slayer-img" src={imgLoc + "?grayscale"} />
      <img className="slayer-img" src={imgLoc} />
      <img className="slayer-img" src={imgLoc} />
    </ul>
  </div>,
  document.getElementById("root")
);
