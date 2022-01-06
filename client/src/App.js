import React from "react"

import { Routes, Route, Link } from "react-router-dom"

import Home from "./components/Home"
import Detail from "./components/Detail"
import Profile from "./components/Profile"
import Error from "./components/Error"

function App(){
  return(
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App