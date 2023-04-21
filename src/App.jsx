// import { ref, set } from "firebase/database";
import "./App.css";
import Mapa from "./components/maps/Mapa";
// import { database } from "./lib/realtime";

function App() {
  // function sendOne() {
  //   set(ref(database, "/led"), {
  //     val: "1",
  //   });
  // }

  // function sendZero() {
  //   set(ref(database, "/led"), {
  //     val: "0",
  //   });
  // }

  return (
    <div className="App">
      <h1>Auto Agro</h1>
      {/* <button onClick={sendOne}>SEND ONE</button> */}
      {/* <button onClick={sendZero}>SEND ZERO</button> */}
      <Mapa/>
    </div>
  );
}

export default App;
