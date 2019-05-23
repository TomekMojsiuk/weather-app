import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';

import './Button.scss';

class Button extends React.Component {
  render() {
    const { onToggleSelectLocation, isSelectLocationOpen } = this.props;

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
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen &&
              <div ref={ref} style={style} data-placement={placement}>
                Hi there, I'm a popup
                <div ref={arrowProps.ref} style={arrowProps.style} />
              </div>
            )}
          </Popper>
        </Manager>
      </div>
    );
  }
}

export default Button;
