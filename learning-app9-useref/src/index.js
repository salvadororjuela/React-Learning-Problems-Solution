import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect, useRef} from "react";

// Does Not Cause Re-Renders
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
    <input type="text" value={inputValue} onChange= {(e) => setInputValue(e.target.value)}/>
    <h1>Render Count: {count.current}</h1>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("useRefApplicationRenders"));

// Accessing DOM Elements
function App1() {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputElement}/>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
ReactDOM.render(<App1/>, document.getElementById("accessingDOMElements"));

// Tracking State Changes
function App2() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  )
}
ReactDOM.render(<App2/>, document.getElementById("trackingStateChanges"));