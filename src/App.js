import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/pages/About'
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

