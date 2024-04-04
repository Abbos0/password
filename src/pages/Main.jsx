import React, { useState } from 'react';
import Password from '../components/Password';
import Entrance from '../components/Entrance';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      {isLoggedIn ? <Entrance /> : <Password onLogin={handleLogin} />}
    </div>
  );
};

export default Main;