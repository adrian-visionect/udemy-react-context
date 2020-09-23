import React from 'react';
import { PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {(toggleLoggedState) => (
          <button onClick={toggleLoggedState}>Switch</button>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Button;
