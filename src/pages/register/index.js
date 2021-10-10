import React from "react";
import Mod from "./Modal.style";
import { TextField } from "@material-ui/core";
import Container from "../../components/Cards/Card.style";
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div>
      <h1>Forms</h1>
      <Mod id="register">
        <Mod.main>
          <h2>Registration! </h2>

          <TextField
            label="Student Name"
            color="Secondary"
            variant="outlined"
          />
          <br />
          <TextField label="Nickname" color="Secondary" variant="outlined" />
          <br />
          <TextField label="Birthday" color="Secondary" variant="outlined" />
          <br />
          <TextField label="Age" color="Secondary" variant="outlined" />
          <br />
          <TextField label="Address" color="Secondary" variant="outlined" />
          <br />
          <TextField
            label="Student Level"
            color="Secondary"
            variant="outlined"
          />
          <br />
          <TextField
            label="Parent/Guardian"
            color="Secondary"
            variant="outlined"
          />
          <br />
          <TextField label="Contact No." color="Secondary" variant="outlined" />
          <br />
          <Container.Button>
            <Link to="/">Proceed!</Link>
          </Container.Button>
        </Mod.main>
      </Mod>
    </div>
  );
}
