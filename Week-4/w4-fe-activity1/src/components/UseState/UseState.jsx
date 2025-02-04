/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  function darkTheme() {
    setTheme(prevtheme => prevtheme = 'dark')
  }
  function lightTheme() {
    setTheme(prevTheme => prevTheme = 'light')
  }
  function Increment() {
    setCount(c => c + 1);
  }
  function Decrement() {
    setCount(c => c - 1);
  }
  function toggle() {
    if (theme === 'light') {
      setTheme('dark');
    }
    else if (theme === 'dark') {
      setTheme('light');
    }
  }

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={toggle}>Toggle</button>
      <button onClick={darkTheme}>Dark</button>
      <button onClick={lightTheme}>Light</button>
      <h2>{count}</h2>
      <button onClick={Increment}>
        Increment
      </button>
      <button onClick={Decrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
