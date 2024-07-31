import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewNav from './components/NewNav';
import Carousel from './components/Carousel'; 
import PopularCategories from './components/PopularCategories';
import Map from "react-map-gl";
import India from "@react-map/india";
import IndiaMap from './components/IndiaMap';
import StateInfo from './components/StateInfo';


function App() {
  const [count, setCount] = useState(0)
  const [st, setst] = useState(0);
  const check=(sc)=>{
    console.log(sc);
    setst(sc);
    document.getElementById("modal-button").click();

    
  }
  return (
    <>
      <NewNav />
      <Carousel />
      <PopularCategories />

      {/* <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      /> */}
      {/* <IndiaMap /> */}
      <div className='relative'>
        <StateInfo state={st} />
      <span className="block mx-auto  text-center text-2xl font-bold custom-underline relative w-fit">
        <p>Let's Explore India</p>
      </span>
      <div className="mx-auto max-w[100vw] overflow-scroll" >
      <India
        
        onSelect={check}
        hoverColor="orange"
        type="select-single"
        hints
        hint
      /></div>
      </div>
      
      
    </>
  );
}

export default App
