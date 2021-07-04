import React, { useState, useEffect, useRef } from 'react'

import Dots from './CrslDots';
import Text from './CrslTxt';
import Button from '../Button'




export default function AllContent(props){

const [index, setIndex]= useState({
    currentIndex : 0,
    preIndex : 0
})
function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }




const timeoutRef = useRef(null);


useEffect(()=>{
    resetTimeout();
    timeoutRef.current=setTimeout(()=>changeIndex(index.currentIndex+1),5000);

    return () => {
        resetTimeout();
      };
},[index])




const changeIndex=(i)=>{
    props.setCurrentIndex(i);
    setIndex({       
        
            preIndex: index.currentIndex,
            currentIndex:(i)%3}
        
    )
}


//clearTimeout(timer);



    return(<>
    
    <div className="Text-Index">                
        <Text index={index.currentIndex} preIndex={index.preIndex}/>
        <div className="dots-and-btn">
        <Dots index={index.currentIndex} rotate={changeIndex} active={props.active}/>
        <Button/>        
        </div></div>
        
   </> )
}

