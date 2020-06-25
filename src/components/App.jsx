import React from 'react';
import Menu from './Menu';
import Outro from './Outro';
import '../styles/App.css';

function App() {
  return (
    <>
      <Menu login={false} />
      <h1 className='app_name'>Open Sorcerer</h1>
      <img src='fairy.png' />
      <a href='https://github.com/login/oauth/authorize?client_id=d7ea0477cd17fdfb8451&redirect_uri=http://localhost:8080/callback'>
        <button className='poop'>wrk plz</button>
      </a>
      <Outro />
    </>
  );
}

export default App;
