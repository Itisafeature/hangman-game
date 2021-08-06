import React, { useState } from 'react';
import { useHandleEnter } from './hooks/enter';

const UserLogin = (props) => {
  const [username, setUsername] = useState('')
  const handleEnter = useHandleEnter;

  const handleOnChange = (e) => {
    setUsername(e.target.value)
  }

  const handleUserLogin = () => {
    props.loginUser(username);
  }

  return(
    <div>
      <input id="username" onChange={handleOnChange} onKeyPress={(e) => handleEnter(e, handleUserLogin)} value={username} />
      <button onClick={handleUserLogin} >Login</button>
    </div>
  )
}

export default UserLogin;
