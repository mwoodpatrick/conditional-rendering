import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function App() {
  const date = new Date();
  const hour = 17; // date.getHours();

  return (
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    // hour > 12 ? <h1>Why are you still working?</h1> : null
    hour > 12 && <h1>Why are you still working?</h1>
  );
}

export default App;
