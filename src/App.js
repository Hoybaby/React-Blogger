// import logo from './logo.svg';
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Create";

function App() {
  // const title = "welcome to the new blog";
  // const likes =50;

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
