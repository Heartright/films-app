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
import { Test } from "../components/Test";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  const fetchDate = async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?apikey=11c5dc1&s=all"
      );
      const dateMovies = response.data;
      setMovies(dateMovies.Search);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  const searchFilms = async (search, category = 'all') => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=11c5dc1&s=${search}${category !== 'all' ? `&type=${category}` : ''}`
      );
      const dateMovies = response.data;
      setMovies(dateMovies.Search);
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
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ ml: 4, width: "80%" }} />
          </Box>
        )}
      </Box>
    </Container>
  );
};
