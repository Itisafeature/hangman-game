import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArtistSearch from './ArtistSearch';
import Letter from './Letter';

const GameContainer = () => {
  const inputEl = useRef('null');
  const [artist, setArtist] = useState('')
  const [submittedArtist, setSubmittedArtist] = useState(false);
  const [track, setTrack] = useState(false);
  const [album, setAlbum] = useState('');
  const [guesses, setGuesses] = useState([]);

  const URL = 'http://localhost:3001/get-song'

  const handleChange = (e) => {
    setArtist(e.target.value)
  }

  const getSong = async () => {
    const song = await axios.get(`${URL}/${artist}`)
    if (song) {
      setSubmittedArtist(true);
      setTrack(song.data.name);
      setAlbum(song.data.album.name)
    }
  }

  const handleGuess = (e) => {
    setGuesses([...guesses, inputEl.current.value.toLowerCase()])
    inputEl.current.value = '';
  }

  const checkIfGuessed = (char) => {
    return guesses.includes(char.toLowerCase());
  };

  return(
    <div>
      {submittedArtist ? null : <ArtistSearch artist={artist} setArtist={setArtist} getSong={getSong} handleChange={handleChange}/>}
      <h1>Album: {album}</h1>
      Guess: <input ref={inputEl} type="text" />
      <button onClick={handleGuess}>Submit Guess</button>
      {track ? track.split('').map((char, i) => <Letter key={i} letter={char} isGuessed={checkIfGuessed(char)}/>) : null}
    </div>
  )
}

export default GameContainer;
