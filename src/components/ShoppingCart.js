import React, { useState, useEffect } from 'react';

import ItemCart from './ItemCart';

const ShoppingCart = ({products, updateQ}) => {
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let t = 0;
        let amount = 0;
        let currPrice = 0;
        for(var i = 0; i < products.length ; i++) {
            amount = products[i].quantity;
            currPrice = products[i].price;
            t+= currPrice*amount;
        }
        setSum(t);
    }, [products])

    return (
        <React.Fragment>    
                    <h3>
                    <img style={{ width:50, height:40 }}src="images/shopping.png" />
                        Your Cart
                    </h3> 
                        {
                            products.map(product => {
                                return (
                                    <ItemCart 
                                        key={product.id} 
                                        product={product} 
                                        updateQ={updateQ} 
                                         />)
                            })
                        } <h3> Grand Total: ${sum} </h3>
                        
        </React.Fragment>
    )
}

export default ShoppingCart;