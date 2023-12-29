import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  function addValue() {
    setCounter(counter += 1); // counter = conter + 1; 11;
    setCounter(counter += 1); // counter = 11; counter + 1 = 12
    setCounter(counter += 1); // counter = 12
    setCounter(counter += 1);
  };

  const deleteValue = () => setCounter(counter -= 1);

  return (
    <>
      <h1>Leanring React</h1>
      <h2>YouTube</h2>
      <p>Current value is {counter}</p>
      <button onClick={addValue}>Increase</button>{' '}
      <button onClick={deleteValue}>Decrease</button>

      < footer > Value: {counter}</footer>
    </>
  )
}

export default App
