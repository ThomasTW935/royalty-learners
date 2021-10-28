import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  BottomTab,
} from "./Contacts.style";
import Map from "../../assets/images/map.png";
import FootLogo from "../../assets/images/LogoIllustration1.png";
import { Time } from "@styled-icons/boxicons-solid/Time";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Telephone } from "@styled-icons/foundation/Telephone";
import { Mobile } from "@styled-icons/boxicons-solid/Mobile";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Address } from "@styled-icons/entypo/Address";
import { Copyright } from "@styled-icons/boxicons-regular/Copyright";
const Footer = () => {
  return (
    <Container id="contacts">
      <Column>
        <img src={FootLogo} style={{ height: "200px", width: "350px" }} />
        <Heading style={{ marginBottom: "2rem" }}>FOR INQUIRIES:</Heading>
        <FooterLink>
          <Email style={{ height: "30px", width: "30px" }} />
          contactus@royaltylearners.ph
        </FooterLink>
        <FooterLink>
          <Telephone style={{ height: "30px", width: "30px" }} />
          (+8) 412-123-1234
        </FooterLink>
        <FooterLink>
          <Mobile style={{ height: "30px", width: "30px" }} />
          +63 935 415 0784
        </FooterLink>
        <FooterLink>
          <Facebook style={{ height: "30px", width: "30px" }} />
          www.facebook.com/royaltyleaners
        </FooterLink>
        <br />
        <Heading>OPERATING HOURS:</Heading>
        <text style={{ color: "white" }}>
          <Time style={{ height: "30px", width: "30px" }} />
          Monday-Friday 8am - 5pm
        </text>
        <br />
        <Heading>ADMINISTRATION</Heading>
        <br />
        <Heading>TEACHERS</Heading>
        <br />
        <text style={{ color: "white", fontSize: "0.8rem" }}>
          <Copyright style={{ height: "15px", width: "15px" }} />
          2021 RoyaltyLearners Pte Ltd Reg.No.20123789123D All Right Reserved.
        </text>
      </Column>

      <Column>
        <Heading style={{ marginTop: "5rem" }}>About Us</Heading>
        <p style={{ color: "white", marginBottom: "5rem" }}>
          The Royalty Learning Center is a school that is based in the
          <br />
          Philippines offering educational services for students with
          <br />
          specialeducation needs.Our school has a team of teachers and
          <br />
          medical professionals specializing in Special Education to provide
          <br />
          a proper evaluation and best quality education for our students.
          <br />
          Our school also has well-designed facilities suited to provide
          <br />
          comfort, convenience, and productivity boost for the students,
          <br />
          parents, teachers, and the school staff. We care about the growth of
          <br />
          our students and we are willing to provide it for them.
        </p>
        <Heading style={{ marginTop: "-3rem" }}>Find Us</Heading>
        <text style={{ color: "white" }}>
          <Address style={{ height: "30px", width: "30px" }} />
          Blk. 68, Cacawaka Meet Road, Sowicked, PA 15612
        </text>
        <img src={Map} style={{ height: "200px", width: "400px" }} />

        <Heading style={{ marginTop: ".5rem" }}></Heading>
        <BottomTab style={{ color: "white", fontSize: "0.9rem" }}>
          <span style={{ marginRight: "2rem" }}>•Blog</span>{" "}
          <span style={{ marginRight: "2rem" }}>•Contact</span>{" "}
          <span style={{ marginRight: "2rem" }}>•Jobs</span>
          <span style={{ marginRight: "2rem" }}>•Terms and Conditions</span>
          <span style={{ marginRight: "2rem" }}>•Privacy Policy</span>
        </BottomTab>
      </Column>
    </Container>
  );
};
export default Footer;
