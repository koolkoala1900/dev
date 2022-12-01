import Box from './Box';

const ProdMap = (props) => {
    const { 
    products,
    addToCart
} = props;

    return (
                <div>
                        {
                            products.map(i => {
                                return (
                                    <Box key={i.id} data={i} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
    )
}

export default ProdMap
