import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtistSearch from './ArtistSearch';
import Letter from './Letter';

const GameContainer = () => {
  const [artist, setArtist] = useState('')
  const [submittedArtist, setSubmittedArtist] = useState(false);
  const [track, setTrack] = useState('');

  const URL = 'http://localhost:3001'

  const handleChange = (e) => {
    setArtist(e.target.value)
  }

  const getSong = async () => {
    const song = await axios.get(`${URL}?q=${artist}`)
    if (song) {
      setSubmittedArtist(true);
      setTrack(song);
    }
  }

  return(
    <div>
      {submittedArtist ? null : <ArtistSearch artist={artist} setArtist={setArtist} getSong={getSong} handleChange={handleChange}/>}
      {track.split('').map(char => <Letter letter={char} />)}
    </div>
  )
}

export default GameContainer;
