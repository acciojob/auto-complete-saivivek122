import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(fruits);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim() === "") setSuggestions(fruits);
      else {
        const filtered = fruits.filter(fruit =>
          fruit.toLowerCase().startsWith(input.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search fruits"
      />
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
