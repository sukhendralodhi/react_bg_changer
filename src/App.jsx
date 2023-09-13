/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react"


function App() {

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('white');

  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }

  const resetValue = () => {
    setCounter(0);
  }

  const changeBgColor = (e) => {
    setColor(e.currentTarget.innerText);
  }
  const resetColor = () => {
    setColor('white')
  }
  return (
    <div className="text-center bg-white-400 h-screen" style={{ backgroundColor: color }}>

      <h1 className="text-center text-2xl">Counter: {counter}</h1>
      <div className="mt-8 space-x-4">
        <button className="bg-green-950 p-2 rounded text-white" onClick={addValue}>Add Value</button>
        <button className="bg-yellow-950 p-2 rounded text-white" onClick={resetValue}>Reset Value</button>
        <button className="bg-red-950 p-2 rounded text-white" onClick={removeValue}>Remove Value</button>
      </div>
      <button
        onClick={resetColor}
        className="mt-8 bg-black text-white p-2 rounded duration-1000 ease-in-out">Reset Color</button>
      <div className="mt-96 bg-white py-4 mx-4 rounded-full">
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-red-600 p-2 rounded text-white mx-4">Red</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-yellow-600 p-2 rounded text-white mx-4">Yellow</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-blue-600 p-2 rounded text-white mx-4">Blue</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-green-600 p-2 rounded text-white mx-4">Green</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-orange-600 p-2 rounded text-white mx-4">Orange</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-pink-600 p-2 rounded text-white mx-4">Pink</button>
        <button
          onClick={(e) => changeBgColor(e)}
          className="bg-cyan-600 p-2 rounded text-white mx-4">Cyan</button>
      </div>
    </div>

  )
}

export default App
