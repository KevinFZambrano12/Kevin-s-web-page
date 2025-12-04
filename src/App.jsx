import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Componets/navBar.jsx";
import Home from "./Componets/screens/home.jsx";
import Projects from "./Componets/screens/projects.jsx";
import Contact from "./Componets/screens/contact.jsx";

function App() {

  return (
    <>
        <div max-w-6xl mx-auto px-4>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
