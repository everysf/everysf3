import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import Home from './components/Home.jsx'
import Experimental from './components/Experimental.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact pat="/experimental" component={Experimental} />
            {/* <Route exact path="/work" component={Work} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;