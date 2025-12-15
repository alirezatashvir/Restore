import { useEffect, useState } from "react"
import { type Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./Navbar";


function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode ? '#121212' : '#eaeaea'
        }}>
          <Container maxWidth='xl' sx={{mt: 14}}>
            <Catalog products={products} />
          </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
