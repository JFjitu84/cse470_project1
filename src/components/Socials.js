import React,{useContext} from 'react';
//import icon
import {
  ImFacebook,
  ImTwitch,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImTwitter
  
} from 'react-icons/im'
//cursor context

import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const {mouseEnterHandle, mouseLeaveHandle} = useContext(CursorContext)
  return <div  
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
           className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4' >
       <li>
          <a href="http://www.facebook.com" target='_blank'>
            <ImFacebook />
          </a>  
        </li>
        <li>
          <a href="http://www.twitter.com" target='_blank'>
            <ImTwitter />
          </a>  
        </li>
        <li>
          <a href="http://www.pinterest.com" target='_blank'>
            <ImPinterest />
          </a>  
        </li>

        <li>
          <a href="http://www.instagram.com" target='_blank'>
            <ImInstagram />
          </a>  
        </li>


        <li>
          <a href="http://www.youtube.com" target='_blank'>
            <ImYoutube />
          </a>  
        </li>
    </ul>
  </div>;
};

export default Socials;
