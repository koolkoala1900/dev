import React, {useState, useEffect} from 'react';

import './App.css';
import Filtering from './components/Filtering';
import filterList from './components/filterList';
import ShoppingCart from './components/ShoppingCart';
import Sizes from './components/Sizes';

function App() {

  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if(JSON.parse(localStorage.getItem("shoppingCart"))) {
      setShoppingCart(JSON.parse(localStorage.getItem("shoppingCart")));
    }
  }, [])


  const sortProducts = (method) => {
    const arrayProd = products;

    if(method === "Lowest to Highest") {
        arrayProd.sort(function(a, b){
          const aPrice = a.price
          const bPrice = b.price
          return aPrice-bPrice
      })
    }
    else if(method === "Highest to Lowest") {
        arrayProd.sort(function(a, b){
          const aPrice = a.price
          const bPrice = b.price
          return bPrice-aPrice
      })
    }
    setProducts(arrayProd);
  }

  const setSize = (size) => {
    const sizes = [...selectedSizes];
    if(!sizes.includes(size)) {
      sizes.push(size);
    }
    else {
      sizes.splice(sizes.indexOf(size), 1);
    }
    setProducts(filterList(sizes, 'size'));
    setSelectedSizes(sizes);
  }

  const addToCart = (item) => {
    const proL = [...shoppingCart];
    if(!proL.includes(item)) {
      proL.push(item);
    }
    proL[proL.indexOf(item)].quantity++;
    localStorage.setItem("shoppingCart", JSON.stringify(proL));
    setShoppingCart(proL);
  }

  const changeQuantity = (item, e) => {
    const proL = [...shoppingCart];
    if(e === '+') {
      proL[proL.indexOf(item)].quantity++;
    }
    else {
      if(proL[proL.indexOf(item)].quantity > 1) {
        proL[proL.indexOf(item)].quantity--;
      }
      else {
        proL.splice(proL.indexOf(item), 1);
      }
    } 
    setShoppingCart(proL);
    localStorage.setItem("cart", JSON.stringify(proL));
  }

  return (
    <div className="App">
      <Sizes selectedSizes={selectedSizes} setSize={setSize} />
      <Filtering products={products} sortProducts={sortProducts} addToCart={addToCart} />
      <ShoppingCart products={shoppingCart} changeQuantity={changeQuantity} />
    </div>
  );
}

export default App;
