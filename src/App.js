import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import UserLogin from './UserLogin';
import GameContainer from './GameContainer';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState('No User Selected');
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = (username) => {
    setUser(username);
    setLoggedIn(true);
    history.push("/select-artist");
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserLogin loginUser={loginUser} />
        </Route>
        <Route exact path="/select-artist">
          { loggedIn ? <GameContainer history={history} /> : null }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
