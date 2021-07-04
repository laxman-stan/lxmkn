import { useState } from 'react';
import './App.css';
import './comps/forPage2/Page2.css'
import './comps/forPage1/Page1.css';
import './comps/forPage1/CrslContent/Crsl.css';
import Page2left from './comps/forPage2/Page2left';
import Page2Img from './comps/forPage2/Page2img'
import Image from './comps/forPage1/CrslContent/CrslImage';
import Svg from './comps/Svg'

//import Scroller from "./comps/Scroller";
import Header from './comps/forPage1/Header'
import Carousel from './comps/forPage1/CrslContent/CrlsContainer'


function App() {


const [index, setIndex] = useState(0);
const setCurrentIndex=(i)=>{
  setIndex(i);
}



// index={index.currentIndex} preIndex={index.preIndex}

// const [value, setValue]= useState(true)
// const winHeight=window.innerHeight;

// const click =()=>{  
//   console.log(document.querySelector('.App').scrollTop)  
// }
// const whileScroll=()=>{
//   if(document.querySelector('.App').scrollTop>window.innerHeight/2)
//   console.log('neeche aa gya');
//   setValue(true)
// }



  return (
    <>
    <div className="App" >
      <div className="first Page" >
          <Header/>
          <Carousel setCurrentIndex={setCurrentIndex} />  
                  
      </div>
      <div className="second Page" >
        <Page2left/>
        <Page2Img/>
      </div>
    </div>
    <Image index={index} preIndex={0} />

    <Svg />
    </>
  );
}

export default App;
