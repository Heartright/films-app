import {Movie} from "./Movie"
import {
    Card,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Stack,
    Box,
    Typography,
    Container,
  } from "@mui/material/";
import { Searcher } from "./Searcher";

export const  Movies =  (props) => {
    const { movies = []} = props;
    return (
      <Container sx={{}} >   
      {movies.length ?
        (<Grid container spacing={6}>
          { movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={3}>
              <Movie {...movie}/>
            </Grid>
          ))}
        </Grid>) : (<Typography>Nothing found</Typography>)
      }
        </Container>   
    )
}


