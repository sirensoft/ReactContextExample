import React, { Component } from 'react';
import AppProvider from './AppProvider'

import Display from './Display'
import Red from './Red'
import Green from './Green'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Main = () => (
  <Router>
    <div>
      <AppProvider>
     
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/green">Green</Link>
          </li>
          <li>
            <Link to="/red">Red</Link>
          </li>
        </ul>
        <Display />
        <hr />
        <Route exact path="/" />
        <Route path="/green" component={Green} />
        <Route path="/red" component={Red} />
        <hr />
        
      </AppProvider>
    </div>
  </Router>
)



class App extends Component {

  render() {
    return (
      <Main />
    );
  }
}

export default App;
