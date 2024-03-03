import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Product from './components/Product';
import Footer from './components/Footer';
import Box from './components/Box';
import Home from './components/Home';
import Signin from './components/Signin';
import Items from './components/Items';
import Contact from './components/Contact';


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
        <Route path='/signin' element={<Signin />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/items' element={<Items />}/>
        <Route path ='/contact' element={<Contact/>}/>


      </Routes>
      </div>

      <Footer />
     
    </div>
    </Router>
  );
}

export default App;
