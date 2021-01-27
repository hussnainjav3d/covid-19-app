import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import React, { useEffect, useState } from "react";
import { fetchCountryList } from "../api";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "1rem auto",
    minWidth: 120,
    width: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Dropdown = ({ getCountry }) => {
  const classes = useStyles();
  const [country, setCountry] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const onChangeHandler = (q) => {
    setSelectedCountry(q);
    getCountry(q);
  };

  useEffect(() => {
    const gettingData = async () => {
      setCountry(await fetchCountryList());
    };
    gettingData();
  }, []);

  return (
    <div className={classes.formControl}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCountry}
          onChange={(e) => onChangeHandler(e.target.value)}
          label="Age"
        >
          <MenuItem value="">
            <em>Select Country</em>
          </MenuItem>
          <MenuItem value="">Global</MenuItem>
          {country
            ? country.map((item) => (
                <MenuItem key={Math.random()} value={item}>
                  {item}
                </MenuItem>
              ))
            : "Loading"}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
