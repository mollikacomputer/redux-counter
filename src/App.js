import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] =  useState(0);

  const handleIncrement = () =>{
    setCount(count+1)
  }
  
  const handleDecrement = () =>{
    setCount(count-1)
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 space-y-5">
                <div
                    className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div className="text-2xl font-semibold">{count}</div>
                    <div className="flex space-x-3">
                        <button
                            onClick={handleIncrement}
                            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment
                        </button>
                        <button
                            onClick={handleDecrement}
                            className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
    
    </div>
  );
}

export default App;
