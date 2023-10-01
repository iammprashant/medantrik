
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';
import Product from './routes/Product';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Signin from './routes/Signin';


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
