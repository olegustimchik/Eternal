import { Header }      from "./components/layers/header";
import { EternalLogo } from "./components/logo/eternal-logo";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <div style={ {
        height: "400px", width: "400px", position: "absolute", top: "200px", left: "200px",
      }}>
        <EternalLogo></EternalLogo>
      </div>
    </>
  );
}

export default App;
