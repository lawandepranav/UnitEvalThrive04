import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar";
import Bookmarks from './Components/Bookmarks';
import Mybooks from './Components/Mybooks';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/books' element={<Mybooks/>}></Route>
  <Route path='/bookmarks' element={<Bookmarks/>}></Route>
  </Routes>
    </div>
  );
}

export default App;