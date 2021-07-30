import React, { useState } from 'react';

const UserLogin = (props) => {
  const [username, setUsername] = useState('')

  const handleOnChange = (e) => {
    setUsername(e.target.value)
  }

  const handleUserLogin = () => {
    props.loginUser(username);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleUserLogin();
  }

  return(
    <div>
      <input id="username" onChange={handleOnChange} onKeyPress={handleEnter} value={username} />
      <button onClick={handleUserLogin} >Login</button>
    </div>
  )
}

export default UserLogin;
