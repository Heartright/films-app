import { Card, CardContent, CardMedia, Typography } from "@mui/material/";
import NoImage from "../img/NoImage.png";

export const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Poster === "N/A" ? (
        <CardMedia component="img" image={NoImage} />
      ) : (
        <CardMedia component="img" image={Poster} />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {Title}
        </Typography>
        <Typography>{Year}</Typography>
      </CardContent>
    </Card>
  );
};
