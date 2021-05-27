import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FAQ from "./components/FAQ";
import Franchise from "./components/Franchise";
import PhoneNav from "./components/PhoneNav";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState(null);

  return (
    <div id="siteWrapper">
      <Router>
        <PhoneNav title={title} />
        <Switch>
          <Route exact path="/">
            <Redirect to="Franchise" />
          </Route>
          <Route path="/FAQ">
            <FAQ title={title} setTitle={setTitle} />
          </Route>
          <Route path="/Franchise">
            <Franchise title={title} setTitle={setTitle} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
