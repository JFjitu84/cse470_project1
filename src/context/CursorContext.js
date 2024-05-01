import React,{useState, useEffect, createContext} from 'react';
//create context
export const CursorContext = createContext();

const CursorProvider = ({children}) => {
  //cursor position state
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  })
  //cursor bg state
  const [cursorBG,setCursorBG] = useState('default');
  const mobileViewportIsActive = window.innerWidth < 768;
  useEffect(()=> {
    if (!mobileViewportIsActive){

    
    const move = e=> {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,

      })
    };
    window.addEventListener('mousemove',move);
    //remove event
    return ()=> {
      window.removeEventListener('mousemove',move)
    };
 } else {
    setCursorBG('none');
  }
  
  });
 // cursor varient
 const cursorVarients = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor:'#0e1112',

    },
    text:{
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor:'#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255,1)'
    }
  
 };

 //mouse enterhandle

 const mouseEnterHandle=() => {
  setCursorBG('text');
 };
  //mouse leaver handle

 const mouseLeaveHandle=() => {
  setCursorBG('default');

 };
  return( 
    <CursorContext.Provider value={{cursorVarients, cursorBG,mouseEnterHandle, mouseLeaveHandle}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
