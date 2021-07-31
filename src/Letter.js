import React from 'react';

const Letter = ({letter, isGuessed}) => {
  return(
    <div>
      {isGuessed ? letter : '_'}
    </div>
  )
}

export default Letter;
