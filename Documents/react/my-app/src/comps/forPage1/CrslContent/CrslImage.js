import userEvent from '@testing-library/user-event';
import React, { useState, useEffect, useRef } from 'react'
export default function Image(props){
    
    
    

 

      


const imgStyle=()=>{   
    return({ transform : `rotate(${120*props.index}deg) ` })
}



    return(
        
   
        <img className="product" style={imgStyle()}  src="https://i.ibb.co/TwvnJgq/try-the-thing.png" alt="nothing" />
      
        
    )
}