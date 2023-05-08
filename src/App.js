import "./App.css";

import React from "react";

let timeoutRef = null;
export default function App() {
  const [count, setCount] = React.useState(0);
  const [isStarted, setIsStated] = React.useState(false);

  React.useEffect(() => {
    if (isStarted) {
      updateCounter(count + 1);
    }
  }, [count]);

  const updateCounter = (countTep) => {
    timeoutRef = setTimeout(() => {
      setCount(countTep);
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Counter {count} </h2>

      <button
      class="glow-on-hover" 
        onClick={() => {
          if (clearTimeout) clearTimeout(timeoutRef);
          setIsStated(!isStarted);
          if (!isStarted) setCount(count + 1);
        }}
      >
        {!isStarted ? "Start" : "Pause"}
      </button>
      <button
      class="glow-on-hover" 
        onClick={() => {
          if (clearTimeout) clearTimeout(timeoutRef);
          setIsStated(false);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
