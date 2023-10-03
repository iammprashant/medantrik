
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import Alert from './components/Alert';
import Home from './routes/Home';
import About from './routes/About';
import Product from './routes/Product';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Signin from './routes/Signin';
import NoteState from './context/notes/NoteState';
import EmailVerify from "./components/EmailVerify";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  return (
    <div className='App'>
      <NoteState>
      <BrowserRouter>
      <Alert alert= {alert}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/blog" element={<Blog showAlert= {showAlert}/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/api/auth/:id/verify/:token" element={<EmailVerify/>} />
        </Routes>  
      </BrowserRouter>
      </NoteState>
    </div> 
  );
}

export default App; 
