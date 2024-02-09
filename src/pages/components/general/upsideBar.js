import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faMaximize} from '@fortawesome/free-regular-svg-icons';

// import { Container } from './styles';

function upsideBar(props) {
  console.log(props);
  const {icon, id, name }= props;

  const handleClickTopWindowPopup = () => {
    console.log("solved");
  }

  return (
    <div className='appTop flex flex-row px-2'>
      <div className='leftGroup flex flex-row w-fit'>
        <img src={props.icon} height={25} width={20} className='mr-2'/>
        <p className='text-white font-bold'>{props.name}</p>
      </div>
      <div className='buttonGroup flex flex-row w-auto gap-1'>
        <button className='topButton minimize' 
        onClick={(e) => {handleClickTopWindowPopup("min", props.id)}}>
          <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
        </button>
        <button className='topButton maximize' 
        onClick={(e) => {handleClickTopWindowPopup("max", props.id)}}>
          <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
        </button>
        <button className='topButton close' 
        onClick={(e) => {handleClickTopWindowPopup("close", props.id)}}>
          <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
        </button>
      </div>
    </div>
  )
}

export default upsideBar;