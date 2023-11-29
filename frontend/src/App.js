import { Route, Routes, Link } from 'react-router-dom';
import MenuItem from './components/menu-item'
import './App.css';
import Basket from './pages/basket';
import Products from './pages/products';
import Restaurant from './pages/restaurant';
import SingleProduct from './pages/single-product';

function App() {
  return<>
   <div className="App">
      <header className="App-header">
        <div>
        <Link to="/">Uber Eats </Link>
        </div>
        
      </header>
      <div>
        <Link  to="/basket">Cart</Link>  
      </div>
    </div>
    
    <Routes>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/products/:id' element={<Products/>}/>
      <Route path='/singleproduct/' element={<SingleProduct/>}/>
      <Route path='/' element={<Restaurant/>}/>
    </Routes>
  </> 
    
}

export default App;
