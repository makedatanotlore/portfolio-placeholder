import React from 'react';
import './App.css';
import { sample } from 'underscore';
import visetharm from './visetharm.png';

function App() {
  const names = ['karl druid', 'kvl drvid', 'makedatanotlore'];
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={visetharm}
          alt='a lovely path representing the eternal way we all walk'
        ></img>
        <h1>welcome, traveler</h1>
        <p>
          i'm {sample(names)} and this is my website. it's kind of barebones at
          the moment, but that's going to change at one point or another.
        </p>
        <p>anyway, here's some stuff what i've gone and done:</p>
        <a
          className='scvmbirther-link'
          href='https://scvmbirther.makedatanotlore.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          SCVMBIRTHER - a character generator for MÖRK BORG
        </a>
        <br />
        <a
          className='slumpgen-link'
          href='https://play.google.com/store/apps/details?id=com.alming.slumpgen&hl=en_US'
          target='_blank'
          rel='noopener noreferrer'
        >
          Slumpgen: NPC Generator for Forbidden Lands RPG (Android)
        </a>
        <br />
        <a
          className='fobbot-link'
          href='https://github.com/makedatanotlore/fobbot-discord'
          target='_blank'
          rel='noopener noreferrer'
        >
          Fobbot, the Forbidden Lands Dice Bot
        </a>
      </header>
    </div>
  );
}

export default App;
