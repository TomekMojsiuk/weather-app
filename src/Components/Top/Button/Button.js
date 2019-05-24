import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import './Button.scss';
import './Popup.scss';
import './SelectLocationForm.scss';

class Button extends React.Component {
  render() {
    const { onToggleSelectLocation, isSelectLocationOpen, onSelectCity, onLocationNameChange, onEnter } = this.props;

    return (
      <div>
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                className="btn btn--select--location"
                ref={ref}
                onClick={onToggleSelectLocation}
                {...this.props}
              >
                Select Location
              </button>
            )}
          </Reference>
          <Popper placement="top" positionFixed={true}>
            {({ ref, style, placement, arrowProps }) =>
              isSelectLocationOpen && (
                <div
                  className="popup"
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <div className="popup--close" onClick={onToggleSelectLocation} />
                  <div className="form--container">
                      <label htmlFor="location-name">Location Name</label>
                      <input id="location-name" type="text" placeholder="City Name" 
                      onChange={onLocationNameChange} 
                      onKeyPress={onEnter}/>
                      <button className="btn btn--select--location" onClick={onSelectCity}>Select</button>
                  </div>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}

export default Button;
