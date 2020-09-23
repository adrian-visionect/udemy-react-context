import React from 'react';
import { AppContext, defaultObject } from './AppContext';
import './App.css';
import UserInfo from './UserInfo.jsx';
import Button from './Button';
import { useState } from 'react';

const App = () => {
  const [isUserLogged, setisUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const toggleLoggedState = () => setisUserLogged((prevValue) => !prevValue);
  const toggleAdultState = () => setIsUserAdult((prevValue) => !prevValue);

  return (
    <div>
      <AppContext.Provider
        value={{
          isUserLogged,
          toggleLoggedState,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>
      <AppContext.Provider
        value={{
          isUserLogged: isUserAdult,
          toggleLoggedState: toggleAdultState,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );

  // handleToggleStateIsLogged = () =>
  //   this.state((prevState) => {
  //     isUserLogged: !prevState.isUserLogged;
  //   });
};

export default App;
