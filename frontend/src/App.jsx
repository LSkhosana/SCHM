import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/payment" element={<Contact/>}/>
      </Routes>
  </BrowserRouter>  
  );
}

export default App;
