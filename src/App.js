import React, {useState, useEffect} from 'react';

import './App.css';
import Sorting from './components/Sorting';
import filterList from './components/Filtering';
import ShoppingCart from './components/ShoppingCart';
import Sizes from './components/SizingList';

function App() {

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [p, setP] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    setP(filterList([], null));
    if(JSON.parse(localStorage.getItem("shoppingCart"))) {
      setShoppingCart(JSON.parse(localStorage.getItem("shoppingCart")));
    }
  }, [])

  const sortingP = (method) => {
    const arrayProd = p;

    if(method === "Highest to Lowest") {
      arrayProd.sort(function(x, y){
        const aPrice = x.price
        const bPrice = y.price
        return bPrice-aPrice
      })
    }
    else if(method === "Lowest to Highest") {
      arrayProd.sort(function(x, y){
        const aPrice = x.price
        const bPrice = y.price
        return aPrice-bPrice
      })
    }
    setP(arrayProd);
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

  const updateQ = (item, e) => {
    const proL = [...shoppingCart];
    const ind = proL.indexOf(item);
    if(e === 'negative') {
      if(proL[ind].quantity > 1) {
        proL[ind].quantity--;
      }
      else {
        proL.splice(ind, 1);
      }
    } 
    setShoppingCart(proL);
    localStorage.setItem("cart", JSON.stringify(proL));
  }

  const reassignSize = (size) => {
    const sizes = [...selectedSizes];
    if(!sizes.includes(size)) {
      sizes.push(size);
    }
    else {
      sizes.splice(sizes.indexOf(size), 1);
    }
    setSelectedSizes(sizes);
    setP(filterList(sizes, 'size'));
  }
  
  return (
    <div className="App">
      <Sizes selectedSizes={selectedSizes} setSize={reassignSize} />
      <Sorting products={p} sortProducts={sortingP} addToCart={addToCart} />
      <ShoppingCart products={shoppingCart} updateQ={updateQ} />
    </div>
  );
}

export default App;
