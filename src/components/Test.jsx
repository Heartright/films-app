import React, { useState } from "react";
import {Grid, RadioGroup, FormControlLabel, Radio} from "@mui/material/";
import Container from "@mui/material/Container";

export const Test = () => {
const [category, setCategory] = useState('')

const handleCategory = (event) => {
    setCategory (event.target.value)
    console.log(category)
 }

  return (
    <Container sx={{ py: 5 }}>
       <RadioGroup
          value={category}
          onChange={handleCategory}
          row 
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="all" control={<Radio />}  label="All"/>
          <FormControlLabel value="movie" control={<Radio />} label="Movies"/>
          <FormControlLabel value="series" control={<Radio />} label="Series"/>
       </RadioGroup>
    </Container>
  );
};
