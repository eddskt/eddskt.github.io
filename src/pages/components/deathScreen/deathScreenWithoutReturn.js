import React from 'react';
import './style.css';

function DeathScreenWithoutReturn({error, steps}) {
  
  return (
    <div className='deathScreenWithout background'>
      <div>
        <p className='errorText'>
        A Problem has been detected and Windows has been shut down to prevent damage to your computer.
        <br/><br/>
        {error ? error : 'NOT_DEFINED_ERROR'}
        <br/><br/>
        if this is the first time you've seen this error screen,<br/>
        restart this page. If this screen appears again, follow <br/>
        these steps:
        <br/><br/>
        {steps ? steps : 'Contact the administrator github.com/eddskt'}
        <br/><br/>
        If problems continue, disable or remove all page cache.<br/>
        Restart your browser or open with another.<br/>
        If you need to use a Internet Explorer, give up.<br/>
        Press CTRL + R to try again, or F12 for Advanced Options.
        <br/><br/>
        Technical Information:
        *** STOP: 0x000000ED (0xMOBD, 0xSCR33N, 0xG1V3UP)
        <br/>
        </p>
      </div>
    </div>
  )
}

export default DeathScreenWithoutReturn