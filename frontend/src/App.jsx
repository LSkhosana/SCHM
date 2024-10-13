import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Payment from "./Pages/Payment";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
  </BrowserRouter>  );
}

export default App;
