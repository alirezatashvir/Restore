import { useEffect, useState } from "react"
import { type Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Button, Container, Typography } from "@mui/material";


function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState,
    {
      name: "product" + (prevState.length + 1),
      price: prevState.length * 100 + 100}])
    };

  return (
    <Container maxWidth='xl'>
      <Box display='flex' justifyContent='center' gap={3} marginY={3}>
        <Typography variant='h4'>Re-store</Typography>
        <Button variant='contained' onClick={addProduct}>Add Product</Button>
      </Box>
      <Catalog products={products} addProduct={addProduct} />
    </Container>
  )
}

export default App
