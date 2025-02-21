import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Createblog from "./Pages/Createblog";
import Nature from "./pages/Nature";
import Travel from "./pages/Travel";
import Technology from "./pages/Technology";
import Politics from "./pages/Politics";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/create' element={<Createblog />}></Route>
          <Route path="/nature" element={<Nature />}></Route>
          <Route path="/travel" element={<Travel />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/politics" element={<Politics />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
