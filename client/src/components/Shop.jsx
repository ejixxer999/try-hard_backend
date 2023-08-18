import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Shop() {
  const API_BASE_URL = "http://localhost:3000";
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productCards = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <ProductCard product={product} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {productCards}, hello world! this is the windows computer.
      </Grid>
    </Container>
  );
}

export default Shop;
