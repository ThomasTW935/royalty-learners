import React from "react";
import Mod from "./Modal.style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h1>Forms</h1>
      <Mod>
        <Mod.main>
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

          <Mod.button>
            <Link to="/form2">Proceed!</Link>
          </Mod.button>
          <Mod.button>
            <Link to="/">Back</Link>
          </Mod.button>
        </Mod.main>
      </Mod>
    </div>
  );
}
