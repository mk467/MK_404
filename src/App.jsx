
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Canvas } from "./Components/Canvas";
import { Customizer } from "./Components/Customizer";
import { Room } from "./Components/Room";




function App() {
return(
<>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Room/>} />
</Routes>
</BrowserRouter>
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