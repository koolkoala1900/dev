import React from 'react'

const Card = ({data, addToCart}) => {
    return (
        <div className="card">
            <img src={data.image} className="image-card" title={data.title} />
            <h3>{data.title}</h3>
            <p> price: $ {data.price}</p>
            <p>size: {data.size}</p>
            <button className="add-to" onClick={() => addToCart(data)}>Add to cart</button>
        </div>
    )
}

export default Card;
