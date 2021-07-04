import React, { useState, useEffect, useRef } from 'react'
export default function Carousel(props){


 const a = props.index;
 const b= props.preIndex;    


   
   
   
   
   
   
    
    
    
      return(
        <div className="carousel-text">
      <div className={a===0? 'animation div' : b===0? 'previous div' : 'div'}  >
      <p className="question">There is some text</p>
      <p className="answer">
        Don’t worry we will Help you
        <br />
        to take <span className="imp">delicious decision</span>. 😋
      </p>
      </div>
      <div className={a===1? 'animation div' : b===1? 'previous div' : 'div'}  >
      <p className="question">This is question two?</p>
      <p className="answer">
        This is answer two
        <br />
        to take <span className="imp">amazing decision</span>. 😋
      </p>
      </div>
      <div className={a===2? 'animation div' : b===2? 'previous div' : 'div'}  >
      <p className="question">this is question 3?</p>
      <p className="answer">
        we are here to help you
        <br />
        to take <span className="imp">money = help</span>. 😋
      </p>
      </div>
    </div>
    )
}