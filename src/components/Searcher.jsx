import { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, FormControl } from "@mui/material/";
import { Switch, Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const Searcher = ({ searchFilms }) => {
  const [input, setInput] = useState("all");
  const [category, setCategory] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchFilms(input);
    }
  };

  const handleSubmit = () => {
    searchFilms(input, category);
  };

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container sx={{ py: 2 }}>
      <FormControl variant="standard" sx={{ m: 2 }}>
        <RadioGroup
          value={category}
          onChange={handleCategory}
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="movie" control={<Radio />} label="Movie" />
          <FormControlLabel value="series" control={<Radio />} label="Series" />
          <FormControlLabel value="game" control={<Radio />} label="Game" />
        </RadioGroup>
      </FormControl>
      <TextField
        id="standard-start-adornment"
        sx={{ ml: 2, width: "80%" }}
        label="Search"
        variant="standard"
        onChange={handleChange}
        onKeyDown={handleKey}
      />

      <Button
        sx={{ m: 2, width: "15%" }}
        type="submit"
        size="small"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Container>
  );
};
