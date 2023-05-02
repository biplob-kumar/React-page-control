
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashbord from "./Page/Dashbord";
import About from './Page/About';
import Comment from "./Page/Coment";
import Analyticks from "./Page/Analyticks";
import Product from './Page/Product';
import ProductList from './Page/ProductLiat';
import Home from './Page/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={ <Dashbord/> }></Route>
          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/comment' element={ <Comment/> }></Route>
          <Route path='/analyticks' element={ <Analyticks/> }></Route>
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
