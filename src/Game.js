import React, { useState, useEffect, useRef } from 'react';
import Letter from './Letter';

const Game = ({ album, trackChars }) => {
  const inputEl = useRef(null);
  const [guesses, setGuesses] = useState([]);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    console.log(trackChars);
    if (trackChars.length > 0) setIsWon(trackChars.every(checkIfGuessed));
  }, [guesses])

  const handleGuess = (e) => {
    setGuesses([...guesses, inputEl.current.value.toLowerCase()])
    inputEl.current.value = '';
  }

  const checkIfGuessed = (char) => {
    return guesses.includes(char.toLowerCase());
  };
  return(
    <>
      <h1>Album: {album}</h1>
      <input ref={inputEl} type="text" maxLength="1" />
      <button onClick={handleGuess}>Submit Guess</button>
      {trackChars.map((char, i) => <Letter key={i} letter={char} isGuessed={checkIfGuessed(char)}/>)}
    </>
  )
}

export default Game;
