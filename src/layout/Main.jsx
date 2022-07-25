import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Box,
  CircularProgress,
} from "@mui/material/";
import { Movies } from "../components/Movies";
import { Searcher } from "../components/Searcher";
import { createGlobalStyle } from 'styled-components'
import { Test } from "../components/Test";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDate = async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?apikey=11c5dc1&s=all"
      );
      const dateMovies = response.data;
      setMovies(dateMovies.Search);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const searchFilms = async (search, category = "all") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=11c5dc1&s=${search}${
          category !== "all" ? `&type=${category}` : ""
        }`
      );
      const dateMovies = response.data;
      setMovies(dateMovies.Search);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          pt: 10,
          pb: 6,
          minHeight: "100vh",
        }}
      >
        <Searcher searchFilms={searchFilms} />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ ml: 4, width: "80%" }} />
          </Box>
        ) : (
          <Movies movies={movies} />
        )}
      </Box>
      <GlobalStyle/>
    </Container>
    
  );
};

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(232, 228, 223);

}
`;