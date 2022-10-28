import { Button } from "./components/Button/Button";
import React, { useState } from "react";
import { Counter } from "./components/Counter/Counter";

function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div className="wrapper">
      <Counter counter={counter} />

      <div className="buttons">
        <Button text={"+1"} func={() => setCounter(counter + 1)} />
        <Button text={"+10"} func={() => setCounter(counter + 10)} />
        <Button text={"+25"} func={() => setCounter(counter + 25)} />
        <Button text={"-100"} func={() => setCounter(counter - 100)} />
      </div>
    </div>
  );
}

export default App;
