import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


function App() {
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
            <Outlet />
          </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
