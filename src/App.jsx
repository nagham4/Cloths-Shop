import Home from './Home';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetail from './ProductDetail';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </Router>
  );
}

export default App
