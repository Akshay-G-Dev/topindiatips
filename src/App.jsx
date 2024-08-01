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
import TravelTips from './components/TravelTips';


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

      <div className="relative">
        <StateInfo state={st} />
        <span className="block mx-auto  text-center text-2xl font-bold custom-underline relative w-fit">
          <p>Let&apos;s Explore India</p>
        </span>
        <div className=" map-container mx-auto max-w[100vw] overflow-scroll cursor-pointer">
          <India
            onSelect={check}
            hoverColor="orange"
            type="select-single"
            hints
          />
        </div>
      </div>

      <span className="block mx-auto  text-center text-2xl font-bold custom-underline relative w-fit">
        <p>Explore curated tips on </p>
      </span>
      <TravelTips />
    </>
  );
}

export default App
