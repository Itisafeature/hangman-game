import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArtistSearch from './ArtistSearch';
import Letter from './Letter';
import Winner from './Winner';

const GameContainer = () => {
  const inputEl = useRef('null');
  const [artist, setArtist] = useState('')
  const [submittedArtist, setSubmittedArtist] = useState(false);
  const [track, setTrack] = useState([]);
  const [trackChars, setTrackChars] = useState([]);
  const [album, setAlbum] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    console.log(trackChars);
    if (trackChars.length > 0) setIsWon(trackChars.every(checkIfGuessed));
  }, [guesses])

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
    }
  }

  const handleGuess = (e) => {
    setGuesses([...guesses, inputEl.current.value.toLowerCase()])
    inputEl.current.value = '';
  }

  const checkIfGuessed = (char) => {
    return guesses.includes(char.toLowerCase());
  };

  const renderContent = () => {
    if (isWon) return <Winner />;

    if (!submittedArtist) return <ArtistSearch artist={artist} setArtist={setArtist} getSong={getSong} handleChange={handleChange}/>

    return(
      <>
        <h1>Album: {album}</h1>
        <input ref={inputEl} type="text" maxLength="1" />
        <button onClick={handleGuess}>Submit Guess</button>
        {track ? trackChars.map((char, i) => <Letter key={i} letter={char} isGuessed={checkIfGuessed(char)}/>) : null}
      </>
    )
  }


  return(
    <div>
      {renderContent()}
    </div>
  )
}

export default GameContainer;
