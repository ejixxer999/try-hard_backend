import React from 'react'
import { Avatar, Button, Divider, Drawer, Typography } from '@mui/material'
import { useUIContext } from "../context/context"
import { Box } from "@mui/system"


function Cart() {

  const { cart, setShowCart, showCart} = useUIContext();
  





  const cartContent = cart.map(item => (
    <Box key={item.id}>
      <Box display="flex"
      sx={{ pt: 2, pb: 2 }} 
      alignItems="start"
      justifyContent={"space-between"}>
        <Avatar src={item.img_url} sx={{ width:96, height:96, mr: 2}} />
        <Box display="flex"
        flexDirection={"column"}>
          <Button>
           this button lives in the object within the cart need to add remove from cart function 
          </Button>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="subtitle2">{item.description}</Typography>
        </Box>
        <Typography variant="body1" justifyContent={"end"}>
          ${item.price}
        </Typography>
      </Box>
      <Divider variant="inset" />
    </Box>
  ))
 

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          borderRadius: 0
        }
      }}
      >
        <h1>My cart</h1>
        {cartContent}
        <Button sx ={{mt: 4}} variant="contained">
          CheckOut
        </Button>
    </Drawer>
  )
}

export default Cart