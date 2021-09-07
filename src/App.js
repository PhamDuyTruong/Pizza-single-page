import Navbar from "./Components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from "./globalStyle";
import Hero from "./Components/Hero";
import { productData, productDataTwo } from './Components/Products/data';
import Products from "./Components/Products";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
          <GlobalStyle />
          <Hero />
          <Products heading='Choose your favorite' data={productData}/>
          <Feature />
          <Products heading='Sweet Treats for You' data={productDataTwo}/>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
