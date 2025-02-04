import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
