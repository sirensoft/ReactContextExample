import React, { Component } from 'react';
import AppProvider from './AppProvider'

import Display from './Display'
import Red from './Red'
import Green from './Green'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Main = () => (

  <Router>
    <div>

      <Link to='/' >Home</Link> |  
      <Link to='/red' >Red</Link> | 
      <Link to='/green' >Green</Link>

      <Route exact path='/' />
      <Route exact path='/red' component={Red} />
      <Route exact path='/green' component={Green} />
    </div>
  </Router>
)



class App extends Component {

  render() {
    return (
      <div>

        <AppProvider>
          <Main />
          <hr />
          <Display />
        </AppProvider>

      </div>

    );
  }
}

export default App;
