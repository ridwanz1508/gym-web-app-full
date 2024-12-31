import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
import Form from './components/Form'
import Membership from './components/Membership';
import Register from './components/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main page */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Feature />
                <Offer />
                <About />
                <Form />
                <Contact />
              </>
            } 
          />
          {/* Membership page */}
          <Route path="/membership" element={<Membership />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
