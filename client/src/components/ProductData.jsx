import { Typography } from "@mui/material"
import { ProductDataWrapper } from "../styles/products"

function ProductData({ product }) {
    return(
        <ProductDataWrapper>
            <Typography variant='h5' lineHeight={2}>
            {product.name}
            </Typography>
            <Typography variant='body1'>
            ${product.price}
            </Typography>
        </ProductDataWrapper>
    )

}

export default ProductData;