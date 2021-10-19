import React from "react";
import Modd from "./Modal.form.style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Form2() {
  return (
    <div>
      <h1>2nd Form</h1>
      <Modd id="register">
        <Modd.main>
          <h2> Online Registration </h2>

          <TextField
            label="Student Name"
            color="Secondary"
            variant="outlined"
            width="5"
          />

          <TextField label="Nickname" color="Secondary  " variant="outlined" />

          <TextField label="Birthday" color="Secondary" variant="outlined" />

          <TextField label="Age" color="Secondary" variant="outlined" />

          <TextField label="Address" color="Secondary" variant="outlined" />

          <TextField
            label="Student Level"
            color="Secondary"
            variant="outlined"
          />

          <TextField
            label="Parent/Guardian"
            color="Secondary"
            variant="outlined"
          />

          <TextField label="Contact No." color="Secondary" variant="outlined" />

          <Modd.button>
            <Link to="/">Done!</Link>
          </Modd.button>
        </Modd.main>
      </Modd>
    </div>
  );
}
