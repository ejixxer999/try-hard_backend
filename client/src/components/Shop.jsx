
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import  ProductCard  from "./ProductCard"



function Shop({ products }) {
 
  const productCards = products.map(product => (
    <Grid item key={product.id} xs={2} sm={4} display="flex" flexDirection={"column"}
    alignItems="center">
      <ProductCard product={product} />
    </Grid>
  ))
    
    
  return (
    
      <Container>
        <Grid
        container 
        justifyContent={"center"}
        sx={{margin: '20px 4px 10px 4px'}}
        >
        { productCards } 

        </Grid>
      </Container>

         
     
    
    
  
  )
  
}

export default Shop