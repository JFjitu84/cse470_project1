import React,{useContext} from 'react';
//import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
//import link
import { Link } from 'react-router-dom';
//import motion 
import {motion} from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//cursor context

import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const {mouseEnterHandle, mouseLeaveHandle} = useContext(CursorContext)
    return (
    <motion.section 
    initial={{opacity:0,y: '100%'}} 
    animate={{opacity:1,y: 0}} 
    exit={{opacity:0,y: '100%'}} 
    transition={transition1}className='section bg-green-200'>
    <div className='container mx-auto h-full relative'> 
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <motion.div 
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
          initial={{opacity:0,y: '-80%'}} 
          animate={{opacity:1,y: 0}} 
          exit={{opacity:0,y: '-80%'}} 
          transition={transition1}
          className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'> 
            Welcome to my photography portfolio! I am passionate about capturing moments and emotions through the lens of my camera.  I specialize in various genres of photography, including landscape, portrait, and event photography. My goal is to create stunning visual stories that resonate with viewers and leave a lasting impression. Through my work, I aim to evoke emotions, inspire creativity, and showcase the beauty of the world around us. Join me on this journey as I continue to explore and capture the essence of life through photography. 

          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
        </motion.div>
        {/* image gride */}
        <div
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
          className='grid grid-cols-2 lg:gap-2'>
          {/* image   */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dutation-500' src={Image1} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dutation-500' src={Image2} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dutation-500' src={Image3} alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dutation-500' src={Image4} alt='' />
          </div>
          
        </div>
      </div>
    </div>
  </motion.section>
    );
};

export default Portfolio;
