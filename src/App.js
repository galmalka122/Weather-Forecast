import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [result, setResult] = useState("");
  const [imgResult, setImageResult] = useState("");

  function receiveResultFromServer(result) {
    setResult(result);
  }

  function receiveImageResultFromServer(result) {
    setImageResult(result);
  }

  return (
    <div className="App">
      <Form
        url={"https://www.7timer.info/bin/api.pl"}
        receiveResult={receiveResultFromServer}
        reciveImageResult={receiveImageResultFromServer}
      />
      {result ? (
        <div className="border p-3">Result is {JSON.stringify(result)}</div>
      ) : (
        ""
      )}
      {imgResult ? <img src={imgResult} alt="Weather Visual"></img> : ""}
    </div>
  );
}

export default App;
