import React from 'react';
import './style.css';

// import { Container } from './styles';

function DeathScreenWithReturn({error, clicked}) {

  const clickOrKey = () => {
    clicked(true);
  }

  return(
    <div className='deathScreen background' onClick={clickOrKey} onKeyDownCapture={clickOrKey}>
      <div>
        <p className='errorText'>
        An error has occurred. To Continue:
        </p>
        <p className='errorText'>
        Click in this screen to return to Windows,
        Relax, you don't will lose unsaved information in all open applications.
        </p>
        <p className='errorText'>
        Error: { error ? error : '4N : 3RR0 : 5T4TU5'}
        </p><br/><br/>
        <p className='errorText text-center'>
        Press any key to continue <span className='blink'>_</span>
        </p>
      </div>
    </div>
  );
}

export default DeathScreenWithReturn;