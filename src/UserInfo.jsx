import React, { PureComponent } from 'react';
import App from './App';
import { AppContext } from './AppContext';

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            {/* {console.log(props)} */}
            <p>User is {isUserLogged ? 'zalogowany' : 'niezalogowany'}</p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
