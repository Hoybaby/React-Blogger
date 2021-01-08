import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";

function App() {
  const title = "welcome to the new blog";
  const likes =50;

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} of times</p>
      </div>
    </div>
  );
}

export default App;
