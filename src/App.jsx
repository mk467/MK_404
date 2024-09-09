
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Bannertop } from "./Components/Bannertop";
import { Login } from "./Components/Login";
import { Login } from "./Components/Register";




function App() {
return(
<>

<BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
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