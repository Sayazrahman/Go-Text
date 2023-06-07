
import React, { useState } from "react";

export default function Textform(props) {
 
  const handleUPclick = () => {
    console.log("You clicked upper case" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleLowerclick = () => {
    console.log("You clicked Lower case" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleextractclick = () => {
    console.log("You clicked extract case" + text);
    let newtext = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    setText(newtext);
  };
  

  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div>
      <div className="mb-3" >
        <label htmlFor="textarea" className="form-label">
          <h1 style={{ color:props.mode === "dark" ? "white" : "black"}}>Enter the text to Analyse</h1>
        </label>
        <textarea style={{backgroundColor: props.mode === "dark" ? "#36454F" : "white", color:props.mode === "dark" ? "white" : "black"}}
          className="form-control"
          id="mybox"
          rows="6"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPclick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-danger" onClick={handleLowerclick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-warning " onClick={handleextractclick}>
        Extract Gmail/Email
      </button>
    </div>
    <div className="container my-4" style={{ color:props.mode === "dark" ? "white" : "black"}}>
      <h1>Your text summarry:</h1>
      <p>{text.length}characters</p>
      <h2 >Preview of your text</h2>
      <p>{text}</p>
    </div>
    </>
    
  );
}
