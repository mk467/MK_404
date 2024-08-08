
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Canvas } from "./Components/Canvas";
import { Customizer } from "./Components/Customizer";




function App() {
return(
<>
<main className="app transition-all ease-in">
<Home/>
<Canvas/>
<Customizer/>

</main>
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