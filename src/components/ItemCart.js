import React from 'react'

const ItemCart = ({product, changeQuantity}) => {
    return (
            <div>
                    <h3 >{product.title}</h3>
                    <p><span>$ {product.price}</span></p>
                    <p><span> size: {product.size}</span></p>
                <div>
                    <p >quantity: <span>{product.quantity}</span></p>
                    <div>
                     <button onClick={() => changeQuantity(product, '-')}>Remove Item From Cart</button>
                    </div>
                </div>
            </div>
    )
}
export default ItemCart;
