import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import MyResome from './MyResome.jsx';


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <MyResome />
      </BrowserRouter>
    );
  }
}

export default App;