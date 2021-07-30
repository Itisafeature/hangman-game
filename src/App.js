import React, { useState } from 'react';
import UserLogin from './UserLogin';
import GameContainer from './GameContainer';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [user, setUser] = useState('No User Selected');
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (username) => {
    setUser(username);
    setLoggedIn(true);
  }


  return (
    <div className="App">
      { !loggedIn ? <UserLogin loginUser={loginUser} /> : null }
      { loggedIn ? <GameContainer /> : null }
    </div>
  );
}

export default App;
