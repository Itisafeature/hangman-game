import React from 'react';

const ArtistSearch = ({artist, handleChange, getSong}) => {
  return (
    <div>
      <input value={artist} onChange={handleChange} />
      <button onClick={getSong}>Submit Artist</button>
    </div>
  )
}

export default ArtistSearch;
