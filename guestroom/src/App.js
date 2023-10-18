{/*import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import CreateRoom from './Pages/CreateRoom';
import { useState } from 'react';
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";
function App() {
  const[isAuth,setIsAuth]=useState(false);

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname="/Login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? (
            <Link to="/Login">Login</Link>
            ):(
          <>
          <Link to="/CreateRoom">Room</Link>
          <button onClick={signUserOut}>Logout</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateRoom" element={<CreateRoom isAuth={isAuth}/>} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
};

export default App;*/}
