import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home";
import Sign from "./components/Sign";
import Product from "./components/Product";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/Sign" element={<Sign/>} />
      <Route exact path="/Product" element={<Product/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
    </Routes>
  );
}
export default App;