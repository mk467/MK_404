
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";




function App() {
return(
<>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Home />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
</>



);

}

export default App
