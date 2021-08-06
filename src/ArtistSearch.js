import React from 'react';
import { useHandleEnter } from './hooks/enter';

const ArtistSearch = ({artist, handleChange, getSong}) => {
  const handleEnter = useHandleEnter;
  return (
    <div>
      <input value={artist} onChange={handleChange} />
      <button onClick={getSong} onKeyPress={(e) => handleEnter(e, getSong)}>Submit Artist</button>
    </div>
  )
}

export default ArtistSearch;
