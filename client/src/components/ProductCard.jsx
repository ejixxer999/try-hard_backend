import { Stack } from '@mui/material'
import React from 'react'
import { useMatch } from "react-router-dom"
import useCart from '../hooks/useCart'
import { Product, ProductAddToCart, ProductImage  } from '../styles/products'
import  ProductData  from "./ProductData"


function ProductCard({ product }) {
    const match = useMatch("product/:productId")
    const { addToCart, addToCartText } = useCart({...product, quantity: 1})



    return(
      <>
      <Product>
        <ProductImage src={product.img_url} />
        <ProductData product={product} />
      </Product>
      <ProductAddToCart 
      onClick={addToCart}
      variant="contained">{addToCartText}</ProductAddToCart>
      </>
    )
}

export default ProductCard
