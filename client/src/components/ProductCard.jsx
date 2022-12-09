import React from 'react'
import { useMatch } from "react-router-dom"
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'

function ProductCard({ product }) {
    const match = useMatch("product/:productId")
    console.log(match)
debugger;
    return(
        <div>
            <ListItem button>
                <ListItemText primary={ product.name } secondary={ product.price } />
            </ListItem>
        </div>
    )
}

export default ProductCard
