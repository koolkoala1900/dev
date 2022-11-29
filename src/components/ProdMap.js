import Box from './Box';

const ProdMap = ({products, addToCart}) => {

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
