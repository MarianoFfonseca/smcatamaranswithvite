import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App bg-black">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
