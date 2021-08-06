import React, { useState, useEffect, useRef } from 'react';
import Letter from './Letter';

const Game = ({ album, trackChars, setIsWon, history }) => {
  const inputEl = useRef(null);
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    if (trackChars.length > 0) {
      const checkWin = trackChars.every(checkIfGuessed)
      if (checkWin) {
        setIsWon(checkWin);
        history.push("/congratulations");
      }

    }
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
