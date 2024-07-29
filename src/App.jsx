import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewNav from './components/NewNav';
import Carousel from './components/Carousel'; 
import PopularCategories from './components/PopularCategories';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <NewNav />
        <Carousel />
        <PopularCategories />
    </>
  )
}

export default App
