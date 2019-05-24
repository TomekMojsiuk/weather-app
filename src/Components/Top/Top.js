import React from 'react';


import './Top.scss';
import Weather from './Weather/Weather';
import Button from './Button/Button';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false,
    }
  }

  onToggleSelectLocation = () => {
    this.setState((prevState) => ({
      isSelectLocationOpen: !prevState.isSelectLocationOpen
    }))
    console.log(this.state.isSelectLocationOpen);
  }

  render() {

    return (
      <div className="top--container">
        <Button onToggleSelectLocation={this.onToggleSelectLocation} isSelectLocationOpen={this.state.isSelectLocationOpen} />
        <div className="title"></div>
        <div className="location">
          <Weather {...this.props} />
        </div>
      </div>
    );
  }
}

export default Top;
