import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("Enter text here");
  let time = 0;

  const handleClick = () => {
    console.log("Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to uppercase", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const emptyArea = () => {
    setText("");
  };
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center py-5 text-bold">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            spellCheck="true"
            onClick={emptyArea}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-info text-white" onClick={handleClick}>
          <a href="/" accessKey="c">
            Convert to Uppercase
          </a>
        </button>
        <button className="btn btn-primary text-white mx-4" onClick={copyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary text-white mx-4"
          onClick={handleExtraSpaces}
        >
          Handle Spaces
        </button>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
export default Textform;
