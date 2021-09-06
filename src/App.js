import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <h1>Video Player</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=mOUU8IEFoWo"
        controls
        // width="100%"
        // height="100%"
        playing
        onReady={() => console.log("Player is ready")}
        onError={(err) => console.log("Error", err)}
      />
    </div>
  );
}

export default App;
