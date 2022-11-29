import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
  } from '@mui/material';
const ItemCart = ({product, updateQ}) => {
    return (
        <Card style={{backgroundColor: "lightskyblue"}} sx={{ maxWidth: 300}}>
            <new-line></new-line>
            <CardContent> 
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
                <Typography variant="h6" color="text.primary">
                ${product.price}
                <Typography variant="h6" color="text.primary">
                quantity: {product.quantity}
              </Typography>
              </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.size}
              </Typography>
            </CardContent>
          <CardActions>
            <button className="add-to" onClick={() => updateQ(product, 'negative')}>Remove from Cart</button>
          </CardActions>
        </Card>
      );
}
export default ItemCart;
