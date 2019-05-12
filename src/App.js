import React from "react";

import Top from "./Components/Top/Top";
import Bottom from "./Components/Bottom/Bottom";

import "./App.scss";

function App() {
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

export default App;
