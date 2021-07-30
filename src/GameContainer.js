import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Letter from './Letter';

const GameContainer = () => {
  const [word, setWord] = useState('');

  const URL = 'https://api.themoviedb.org'

  useEffect(() => {
    const getWord = async () => {
      try {
        // const latestId = await axios.get(`${URL}/movie/latest`)
        // debugger;
        setWord('Hello World');
      } catch(err) {
      }

    }

    getWord();
  }, [])

  return(
    <div>
      {word.split('').map(char => <Letter letter={char} />)}
    </div>
  )
}

export default GameContainer;
