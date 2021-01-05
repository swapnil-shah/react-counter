import React, { useState } from "react";
import "./styles.css";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ background: theme }}>
      <div className="App">
        Counter with Class
        <Counter initialCount={0} />
        Counter with Hooks
        <CounterHooks initialCount={0} />
        <button
          onClick={() =>
            setTheme((prevTheme) => {
              return prevTheme === "red" ? "blue" : "red";
            })
          }
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}
