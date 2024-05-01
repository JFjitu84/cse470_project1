import React, { useContext } from 'react';
//import component
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'; // Import AnimRoutes component
//import router 
import { BrowserRouter as Router } from 'react-router-dom';
//import motion

import {motion} from 'framer-motion'
//import cursor context
import { CursorContext } from './context/CursorContext';
 
const App = () => {
  const {cursorVarients, cursorBG} = useContext(CursorContext)
   

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      
      </Router>
      {/*cursor */}
      <motion.div 
       variants={cursorVarients}
       animate={cursorBG}
       className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
       ></motion.div>
    </>
  
  );
};

export default App;
