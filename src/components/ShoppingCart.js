import React, { useState, useEffect } from 'react';

import ItemCart from './ItemCart';

const ShoppingCart = ({products, changeQuantity}) => {
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
                    <img style={{ width: 50, height: 40 }}src="images/shopping.png" alt="cart" />
                        Your Cart
                    </h3> 
                        {products.length === 0 
                            ? 
                            <div>
                                <p>You Have Zero Items to Checkout. Please add to Your Cart!</p>
                            </div> 
                            :
                            products.map(product => {
                                return (
                                    <ItemCart 
                                        key={product.id} 
                                        changeQuantity={changeQuantity} 
                                        product={product} 
                                         />)
                            })
                        } <h3> Grand Total: ${sum} </h3>
                        
        </React.Fragment>
    )
}

export default ShoppingCart;