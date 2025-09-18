import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Starter App</h1>
        <p>Welcome to your new React project!</p>
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
      </header>
    </div>
  );
}

export default App;
