import React from "react";

import "./Top.scss";
import Weather from "./Weather/Weather";
import Button from "./Button/Button";

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='top--container'>
        <div className='title'>My Weather</div>
        <div className='location'>
          <Weather {...this.props} />
        </div>
        <Button />
      </div>
    );
  }
}

export default Top;
