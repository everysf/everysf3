import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components'
import Home from './components/Home'
import Experimental from './components/Experimental'
import Fun from './components/Fun'
import Exp2 from './components/Exp2'
import Exp3 from './components/Exp3'
import Exp4 from './components/Exp4'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/exp" component={Experimental} />
            <Route exact path="/fun" component={Fun} />
            <Route exact path="/exp2" component={Exp2} />
            <Route exact path="/exp3" component={Exp3} />
            <Route exact path="/hello" component={Exp4} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;