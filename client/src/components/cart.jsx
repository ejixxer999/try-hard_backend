import React from "react";
import { Avatar, Button, Divider, Drawer, Typography } from "@mui/material";
import { useUIContext } from "../context/context";
import { Box } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {
  const nav = useNavigate();
  const { cart, setCart, setShowCart, showCart } = useUIContext();
  const { userToken } = useUIContext();


  const createOrder = () => {
    if (!userToken) {
      toast.warn("Please login to continue");
      nav("/login");
      return;
    }

    if(cart.length == 0) {
      toast.warn("Please add something in cart");
      return;
    }

    axios
      .post(
        "/orders",
        {
          order: {
            orders_products_attributes: cart.map((po) => {
              return { product_id: po.id };
            }),
            amount: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
          },
        },
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          toast.success(`Order created successfully`);
          setCart([])
          nav("/");
        } else {
          toast.error(`Error!!! ${res.data.message}`);
        }
      })
      .catch((error) => {
        toast.error(`Error!!! ${error}`);
      });
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id)
    item.quantity -= 1
    if(item.quantity <= 0) {
      setCart(cart.filter((c) => c.id !== id))
    } else {
      const item_index = cart.findIndex((item) => item.id === id)
      cart[item_index] = item
      setCart([...cart])
    }
  };

  const increaseQuantity = (id) => {
    const item_index = cart.findIndex((item) => item.id === id)
    cart[item_index].quantity += 1
    setCart([...cart])
  };

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      >
        <Avatar src={item.img_url} sx={{ width: 70, height: 70, mr: 2 }} />
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="subtitle2">{item.description}</Typography>
        </Box>
        <Box
          splay="flex"
          sflexDirection={"column"}
          alignContent={"center"}
          className="h-100"
        >
          <Typography variant="body1" di>
            ${item.price}
          </Typography>
        </Box>

        <Box display="flex" flexDirection={"column"}>
          x {item.quantity || 1}
        </Box>
        <Box display="flex" flexDirection={"column"}>
          <Button
            sx={{ mb: 1 }}
            variant="contained"
            color="success"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </Button>
        </Box>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          borderRadius: 0,
          padding: "20px",
        },
      }}
    >
      <h1>My cart</h1>
      {cartContent}
      <div className="">
        Total Amount: &nbsp;&nbsp;
        <b>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</b>
      </div>
      <Button sx={{ mt: 4 }} variant="contained" onClick={createOrder}>
        CheckOut
      </Button>
    </Drawer>
  );
}

export default Cart;
