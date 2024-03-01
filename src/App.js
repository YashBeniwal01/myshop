import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Product from './components/Product';
import Footer from './components/Footer';
import Box from './components/Box';
import Home from './components/Home';


function App() {
  return (
    <Router>   
    <div className="App">
      <Header />

      <div className='content'>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/myshop' element={<Home />}/>  
        <Route path='/box' element={<Box />}/>

      </Routes>
      </div>

      <Footer />
     
    </div>
    </Router>
  );
}

export default App;
