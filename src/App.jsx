import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/section1/login'
import Navbar from './components/section1/navbar'
import Sec1cont from './components/section1/sec1cont'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the Dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <>
             <Sec1cont/>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App


