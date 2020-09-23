import React, { PureComponent } from 'react';
import { AppContext, defaultObject } from './AppContext';
import './App.css';
import UserInfo from './UserInfo.jsx';
import Button from './Button';

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  // handleToggleStateIsLogged = () =>
  //   this.state((prevState) => {
  //     isUserLogged: !prevState.isUserLogged;
  //   });
}

export default App;
