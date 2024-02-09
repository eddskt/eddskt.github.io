import React from 'react';
import './style.css';

function LoadingScreen() {
  return (
    <div className='bg-black w-full h-screen flex justify-center flex-col text-center items-center'>
      <div className='mb-10'>
        <img src={require('../../../static/logos/loadingLogo.png')} width={250} alt=''/>
      </div>

      <div className='loadingRetangle border-1 border-white rounded-6 w-56 h-6 overflow-hidden'>
        <div className='loadingBlocks flex flex-row w-fit'>
          <div className='blockLoad blockLoad1 bg-gradient-to-t from-[#3355a3] via-[#97c5ea] to-[#3355a3]'></div>
          <div className='blockLoad blockLoad1 bg-gradient-to-t from-[#3355a3] via-[#97c5ea] to-[#3355a3]'></div>
          <div className='blockLoad blockLoad1 bg-gradient-to-t from-[#3355a3] via-[#97c5ea] to-[#3355a3]'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen