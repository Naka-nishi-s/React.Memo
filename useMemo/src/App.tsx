import "./App.css";
import { useState } from "react";
import { Sample } from "./Sample";
import { Sample2 } from "./Sample2";

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div className="App">
      <p>カウント:{number}</p>
      <Sample number={number} />
      <Sample2 />

      <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
        カウントアップボタン
      </button>
    </div>
  );
}

export default App;
