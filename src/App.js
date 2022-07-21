import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
import { Box } from "@mui/material";

export const  App = () => {
  return (
   <Box>
      <Header/>
      <Main/>
      <Footer/>
   </Box>
  );
}
