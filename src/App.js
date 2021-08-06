import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import UserLogin from './UserLogin';
import ArtistSearch from './ArtistSearch';
import Game from './Game';
import Winner from './Winner';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState('No User Selected');
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('');
  const [submittedArtist, setSubmittedArtist] = useState(false);
  const [track, setTrack] = useState([]);
  const [trackChars, setTrackChars] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const URL = 'http://localhost:3001/get-song'


  const getSong = async () => {
    const song = await axios.get(`${URL}/${artist}`)
    if (song) {
      setSubmittedArtist(true);
      setTrack(song.data.name);
      setTrackChars(song.data.name.split(''));
      setAlbum(song.data.album.name)
      console.log('here')
      history.push('/play-game');
    }
  }

  const loginUser = (username) => {
    setUser(username);
    setLoggedIn(true);
    history.push("/select-artist");
  }

  const handleChange = (e) => {
    setArtist(e.target.value)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserLogin loginUser={loginUser} />
        </Route>
        <Route exact path="/select-artist">
          { loggedIn ? <ArtistSearch handleChange={handleChange} artist={artist} getSong={getSong} /> : null }
        </Route>
        <Route exact path="/play-game">
          { loggedIn ? <Game setIsWon={setIsWon} album={album} trackChars={trackChars} history={history} /> : null }
        </Route>
        <Route exact path="/congratulations">
          { isWon ? <Winner /> : null }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
