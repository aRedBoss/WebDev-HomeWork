import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Plus</button>
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default App;