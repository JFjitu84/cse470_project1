import React,{useContext} from 'react';
//import image
import WomanImg from '../img/about/woman.png';
//import link
import { Link } from 'react-router-dom';
//import motion 
import {motion} from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//cursor context

import { CursorContext } from '../context/CursorContext';



const About = () => {
  const {mouseEnterHandle, mouseLeaveHandle} = useContext(CursorContext)
  return <motion.section 
             initial={{opacity:0,y: '100%'}} 
             animate={{opacity:1,y: 0}} 
             exit={{opacity:0,y: '100%'}} 
             transition={transition1}
             className='section'
             >
    <div onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle} 
      className="container mx-auto h-full relative"> 
      {/* text and image wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/*  image   */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt='' />
        </div>


        {/*  text   */}
        <motion.div 
          initial={{opacity:0,y: '-80%'}} 
          animate={{opacity:1,y: 0}} 
          exit={{opacity:0,y: '-80%'}} 
          transition={transition1}className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col  justify-center  items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'> 
            Welcome to my photography portfolio! I am passionate about capturing moments and emotions through the lens of my camera.  I specialize in various genres of photography, including landscape, portrait, and event photography. My goal is to create stunning visual stories that resonate with viewers and leave a lasting impression. Through my work, I aim to evoke emotions, inspire creativity, and showcase the beauty of the world around us. Join me on this journey as I continue to explore and capture the essence of life through photography. 

          </p>
          <Link to={'/portfolio'} className='btn'> View my work</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
