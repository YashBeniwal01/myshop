import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Product />
      <Footer />
     
    </div>
  );
}

export default App;
