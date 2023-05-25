import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home";
import Sign from "./components/Sign";
import Contact from "./components/Contact";
import Animals from "./components/Animals";
import Addform from "./components/Add/Addform";
import Adminpage from "./components/Adminpage";
import Store from "./components/Store";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/Sign" element={<Sign/>} />
      <Route exact path="/Store" element={<Store/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Animals" element={<Animals/>}/>
      <Route exact path="/Addform" element={<Addform/>}/>
      <Route exact path="/Adminpage" element={<Adminpage/>}/>
    </Routes>
  );
}
export default App;