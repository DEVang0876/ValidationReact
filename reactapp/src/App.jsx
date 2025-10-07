import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import Changepassword from './Changepassword.jsx'
import Todo from './Todo.jsx'
import Product from './product.jsx'
import ProductCard from './product.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='fire'>
        <h1>Deviiinee</h1>
        <h3>23AIML014</h3>
  <Link to="/home">Home     </Link>
  <Link to="/hooks">Hooks     </Link>
  <Link to="/sum">Sum   </Link>
  <Link to="/Todo">Todo</Link>
  <Link to="/validation">Validation     </Link>
  <Link to="/event">Event      </Link>
  <Link to="/calculator">Calculator     </Link>
  <link to="/ProductCard"> Products</link>
        {/* <Link to="/contact">Contact     </Link> */}
        {/* <Link to="/about">About   </Link> */}
        {/* <Link to="/about">About   </Link>
        <Link to="/contact">Contact     </Link>
        <Link to="/hooks">Hooks     </Link>
        */}
        
        
        
        <Link to="/Signup">Signup     </Link>
        <Link to="/Login">Login     </Link>
        <Link to="/Dashboard">Dashboard     </Link>
        <Link to="/Changepassword">Change Password     </Link> 
        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
                    <Route path="/Hooks" element={<Hooks />} />
                    <Route path="/sum" element={<Sumdemo />} />
                    <Route path="/Todo" element={<Todo />} />
                    <Route path="/validation" element={<Validation />} />
                    <Route path="/Event" element={<Event />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path='/ProductCard' element={<ProductCard />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 

          */}
          
          
          
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboad />} />
          <Route path="/Changepassword" element={<Changepassword />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
