import React from "react";
import { ClipboardCheckmark } from "@styled-icons/fluentui-system-regular";
import { Like, UserPlus } from "@styled-icons/boxicons-regular";
import { Groups, Class } from "@styled-icons/material"
import { Observable } from "@styled-icons/simple-icons"
import Con from "./EnrollmentProcess.style";
import Arrow1 from "../../assets/images/EnrollmentProcessArrow1.PNG";
import Arrow2 from "../../assets/images/EnrollmentProcessArrow2.PNG";
import Arrow3 from "../../assets/images/EnrollmentProcessArrow3.PNG";
import Arrow4 from "../../assets/images/EnrollmentProcessArrow4.PNG";



export default function index() {
  return (
    <Con>
      <Con.Title> Royalty Learning Center Enrollment Process </Con.Title>
      <br/>
      <Con.List>
        <Con.ListItem>
          <span>Step 1</span>
          <div>
            <ClipboardCheckmark width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>Inquire</h3>
          <p>Find a suitable tutor Via a 3-min call</p>
        </Con.ListItem>
        <Con.ListItem>
        <img src={Arrow1} alt="arrow" />
        </Con.ListItem>
        <Con.ListItem>
          <span>Step 2</span>
          <div>
            <Like width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>Register</h3>
          <p>Tutor recommendations within 24 hrs</p>
        </Con.ListItem>
        <Con.ListItem>
          <img src={Arrow2} alt="arrow" />
        </Con.ListItem>
        <Con.ListItem>
          <span>Step 3</span>
          <div>
            <UserPlus width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>Choose a Teacher</h3>
          <p>A suitable tutor and start your first lesson</p>
        </Con.ListItem>
      </Con.List>
      <br/>
      <Con.List>
      <Con.ListItem>
          <span>Step 6</span>
          <div>
            <Class width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>Start Class</h3>
          <p>Congratulations !</p>
          <p>Welcome to Royalty Learning Center!!!</p>
        </Con.ListItem>
        <Con.ListItem>
        <img src={Arrow3} alt="arrow" />
        </Con.ListItem>
        <Con.ListItem>
          <span>Step 5</span>
          <div>
            <Groups width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>IEP Meeting</h3>
          <p>Goals are discussed and set</p>
          <p>planning the teaching style needed</p>
        </Con.ListItem>
        <Con.ListItem>
        <img src={Arrow4} alt="arrow" />
        </Con.ListItem>
        <Con.ListItem>
          <span>Step 4</span>
          <div>
            <Observable width={30} height={30} color="#0E7BE5" />
          </div>
          <h3>Initial Observation Meeting</h3>
          <p>The student is invited to</p>
          <p>come to the school for further Observation</p>
        </Con.ListItem>
      </Con.List>
    </Con>
  );
}
