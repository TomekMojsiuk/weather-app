import React from "react";

import "./Top.scss";
import Weather from "./Weather/Weather";
import Button from "./Button/Button";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        img: 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png',
    };
  }

  render() {
    return (
      <div className='top--container'>
        <div className='title'>My Weather</div>
        <div className='location'>
          <Weather img={this.state.img} />
        </div>
        <Button />
      </div>
    );
  }
}

export default Top;
