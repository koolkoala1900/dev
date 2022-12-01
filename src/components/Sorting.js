import React, {useState} from 'react';
import ProdMap from './ProdMap';

const Sorting = (props) =>  {
    const { 
        products,
        sortProducts,
        addToCart
    } = props;
    const [element, setEl] = useState('Select Filter');

    const setL = (e) => {
        setEl(e.target.value);
        sortProducts(e.target.value);
    }
    
    return (
        <div>
            <div >
                <h3>Clothing Products and Accessories</h3>
                <div>
                    Sort by Price:
                    <select element={element} onChange={setL}>
                        <option >Select Filter</option>
                        <option >Lowest to Highest</option>
                        <option >Highest to Lowest</option>
                    </select>
                </div>
            </div>

            <ProdMap products={products} addToCart={addToCart} />
            
        </div>
    )
}

export default Sorting;
