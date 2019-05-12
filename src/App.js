import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import Home from './components/Home'
import Experimental from './components/Experimental'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="exp" component={Experimental} />
            {/* <Route exact path="/work" component={Work} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;