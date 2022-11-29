import Card from './Card';

const ProdList = ({products, addToCart}) => {

    return (
                <div>
                        {
                            products.map(i => {
                                return (
                                    <Card key={i.id} data={i} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
    )
}

export default ProdList
