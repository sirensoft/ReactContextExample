import React, { Component } from 'react';
import AppProvider from './AppProvider'

import Display from './Display'
import Red from './Red'
import Green from './Green'

class App extends Component {

  render() {
    return (

      <AppProvider>
        <h1>Example by Utehn.</h1>
        <hr />
        <Display />
        <hr />
        <Green />
        <hr />
        <Red />
        <hr />
      </AppProvider>

    );
  }
}

export default App;
