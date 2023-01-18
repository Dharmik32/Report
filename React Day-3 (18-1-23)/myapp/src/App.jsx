import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Add />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
