import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")

  return (
    <div className="App">

    <form onSubmit={(e) => {
      e.preventDefault();
      fetch("/user/" + firstName)
          .then(response => 
              response.json()
          )
          .then(data => {
              setLastName(data.text);
          })
          .catch(error => {
              console.log(error);
          });
      }} 
    >
      <label>
        <p>First name:</p>
        <input type="text" onChange={ e => { 
          setFirstName(e.target.value);
        }} />
      </label>
      <label>
        <p>Last name: {lastName}</p>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>        
  );
}

export default App;
