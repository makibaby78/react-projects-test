import React from 'react'
import './App.css'
import Header from './Screens/Header/Header'
import Home from './Screens/Home/Home'
import Catering from './Screens/Catering/Catering'
import Footer from './Screens/Footer/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ErrorPage from './Screens/ErrorPage/ErrorPage'
import Menu from './Screens/Menu/Menu'
import Cakes from './Screens/Cakes/Cakes'
import Cupcakes from './Screens/Cupcakes/Cupcakes'
import Contact from './Screens/Contact/Contact'

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/cupcakes" element={<Cupcakes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
