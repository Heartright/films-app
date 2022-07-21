import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link
} from "@mui/material/";
import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <LocalMoviesTwoToneIcon sx={{ mr: 2 }} fontSize="large"/>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Movie search app
        </Typography>
        <Link color="inherit" variant="h5" href="https://github.com/Heartright" target="_blank" underline="none">
          Repo
        </Link>{" "}
      </Toolbar>
    </AppBar>
  );
};
