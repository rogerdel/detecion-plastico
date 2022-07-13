import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import Image from './pages/Image';
import Video from './pages/Video';
import Live from './pages/Live';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/image' element={<Image />} />
      <Route path='/video' element={<Video />} />
      <Route path='/live' element={<Live />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
