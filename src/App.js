import React from "react";
import axios from 'axios';

import Top from "./Components/Top/Top";
import Bottom from "./Components/Bottom/Bottom";

import "./App.scss";

class App extends React.Component {

  render () {
  return (
    <div className='app--container'>
      <div className='main--container'>
        <div className='top--section'>
          <Top />
        </div>
        <div className='bottom--section'>
          <Bottom />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
