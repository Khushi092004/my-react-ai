
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const product = {
    imagesrc:"images/OIP.jpeg",
    title:"iphone 16 pro",
    specifications:[
        "A17 prochip with 6-core gpu",
        "3x or 5x Telephot camera",
        "Upto 20 hours of video playback"
    ],
    price:9999,
};

  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product}/>  
        <ProductCard product={product}/> 
        <ProductCard product={product}/> 
      </ProductList>
      
    </div>
  );
}

export default App;
