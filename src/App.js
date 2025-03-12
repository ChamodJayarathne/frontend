import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
// import { theme } from "./styles/styles";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <ContactForm />
      </Box>
    // </ThemeProvider>
  );
}

export default App;
