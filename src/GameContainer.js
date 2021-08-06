import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Game from './Game';
import ArtistSearch from './ArtistSearch';
import Winner from './Winner';

const GameContainer = ({ history }) => {
  const [artist, setArtist] = useState('')
  const [submittedArtist, setSubmittedArtist] = useState(false);
  const [track, setTrack] = useState([]);
  const [trackChars, setTrackChars] = useState([]);
  const [album, setAlbum] = useState('');

  const URL = 'http://localhost:3001/get-song'

  const handleChange = (e) => {
    setArtist(e.target.value)
  }

  const getSong = async () => {
    const song = await axios.get(`${URL}/${artist}`)
    if (song) {
      setSubmittedArtist(true);
      setTrack(song.data.name);
      setTrackChars(song.data.name.split(''));
      setAlbum(song.data.album.name)
      history.push('/play-game');
    }
  }

  const renderContent = () => {

    if (!submittedArtist) return <ArtistSearch artist={artist} setArtist={setArtist} getSong={getSong} handleChange={handleChange}/>

    return (
      <Switch>
        <Route path="play-game">
          <Game trackChars={trackChars} album={album}/>
        </Route>
      </Switch>
    )
  }


  return(
    <div>
      {renderContent()}
    </div>
  )
}

export default GameContainer;
