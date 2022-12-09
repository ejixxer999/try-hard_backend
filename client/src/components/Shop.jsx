
import ProductCard from "./ProductCard"
import ListItem from '@material-ui/core/ListItem'



function Shop({ products }) {
 
  const productCards = products.map(product => 
    <ProductCard key={ product.id } product={ product } />
    )
    
    
  return (
    
      <ListItem>

         { productCards } 
         
      </ListItem>
    
    
  
  )
  
}

export default Shop