import React from 'react';
import './App.css';
import './style.css';
import {MdOutlineSettingsSuggest} from 'react-icons/md';
import {MdPhoneInTalk} from 'react-icons/md';
import {TiUserOutline} from 'react-icons/ti';
import {CgHome} from 'react-icons/cg';
import {GoLocation} from 'react-icons/go';
import {TiArrowBackOutline} from 'react-icons/ti';
import {MdOutlineEmail} from 'react-icons/md';
import {TbWorld} from 'react-icons/tb';
import {BiSearch} from 'react-icons/bi';
import {BsCamera} from 'react-icons/bs';
import {AiOutlineLock} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';

const App = () => {
  return (
    <div className='App'>
      <div>
        <MdOutlineSettingsSuggest  className='icon'/>
        <MdPhoneInTalk  className='icon'/>
        <TiUserOutline  className='icon'/>
        <CgHome  className='icon'/>
      </div>
      <div>
        <GoLocation  className='icon'/>
        <TiArrowBackOutline  className='icon'/>
        <MdOutlineEmail  className='icon'/>
        <TbWorld  className='icon'/>
      </div>
      <div>
        <BiSearch  className='icon'/>
        <BsCamera  className='icon'/>
        <AiOutlineLock  className='icon'/>
        <FiDownload  className='icon'/>
      </div>
    </div>
  );
};

export default App;