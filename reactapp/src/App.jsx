import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import './App.css'
import Home from './home'
import About from './about'
import Contact from './contact'
import Event from './Event.jsx'
import Sumdemo from './sum.jsx'
import Hooks from './Hooks.jsx'
import Calculator from './cal.jsx'
import Validation from './Validation.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Dashboad from './Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='fire'>
        <h1>King</h1>
        <Link to="/home">Home     </Link>
        <Link to="/about">About   </Link>
        <Link to="/contact">Contact     </Link>
        <Link to="/hooks">Hooks     </Link>
        <Link to="/sum">Sum   </Link>
        <Link to="/event">Event      </Link>
        <Link to="/calculator">Calculator     </Link>
        <Link to="/validation">Validation     </Link>
        <Link to="/Signup">Signup     </Link>
        <Link to="/Login">Login     </Link>
        <Link to="/Dashboard">Dashboard     </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/Hooks" element={<Hooks />} />
          <Route path="/sum" element={<Sumdemo />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboad />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
