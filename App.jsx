import {BrowserRouter, Routes, Route} from "react-router-dom";
import SillyCard from "./Components/SillyCard/SillyCard";
import "../src/index.css";

function App() {

  return (
    
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<h1>Hello there!</h1>}/>
      <Route path="/contact" element={<h2>Contact me at</h2>}/>

      <Route path="/posts" element={<SillyCard></SillyCard>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
