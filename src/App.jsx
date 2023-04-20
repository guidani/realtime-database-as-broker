import { ref, set } from "firebase/database";
import "./App.css";
import { database } from "./lib/realtime";

function App() {
  function sendOne() {
    set(ref(database, "/led"), {
      val: "1",
    });
  }

  function sendZero() {
    set(ref(database, "/led"), {
      val: "0",
    });
  }

  return (
    <div className="App">
      <button onClick={sendOne}>SEND ONE</button>
      <button onClick={sendZero}>SEND ZERO</button>
    </div>
  );
}

export default App;
