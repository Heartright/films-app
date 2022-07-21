import * as React from "react";
import {
  Typography,
  Link,
  Box,
  Grid
} from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Heartright"
        target="_blank"
      >
        Heartright
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Typography variant="h5" align="center">
        All rights maybe reserved maybe not...
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          color="inherit"
          href="https://github.com/Heartright"
          target="_blank"
        >
          <GitHubIcon
            fontSize="large"
            sx={{ "&:hover": { color: "purple" }, m: "10px" }}
          />
        </Link>
        <Link color="inherit">
          <TwitterIcon
            fontSize="large"
            sx={{ "&:hover": { color: "purple" }, m: "10px" }}
          />
        </Link>
        <Link color="inherit">
          <LinkedInIcon
            fontSize="large"
            sx={{ "&:hover": { color: "purple" }, m: "10px" }}
          />
        </Link>
      </Grid>
      <Copyright />
    </Box>
  );
};
