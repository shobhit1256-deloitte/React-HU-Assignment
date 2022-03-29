import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';
import ContactUsForm from './Components/ContactUsForm';
import MockApi from './Components/MockApi';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/apiIntegration" element={<MockApi />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
