
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Homee";
import { Canvas } from "./Components/Canvas";
import { Customizer } from "./Components/Customizer";
import ThreeJSComponent from "./Components/ThreeJSComponent";




function App() {
return(
<>
<div className="app transition-all ease-in w-full h-screen">
  <ThreeJSComponent/>
</div>
</>



);

}

export default App
/*
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Home />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  */