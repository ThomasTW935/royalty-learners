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
const Footer = () => {
  return (
    <Box id="contacts">
      <Container>
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
          <br />
          <br />
          <br />
          <br />
          <Heading>TEACHERS</Heading>
        </Column>

        <Column>
          <Heading style={{ marginTop: "5rem" }}>About Us</Heading>

          <p style={{ color: "white", marginBottom: "5rem" }}>
            Royalty Learning Center is a school for students with special
            education
            <br />
            needs based in the Philippines. Our school has a team of special
            <br />
            education teachers and medical professionals to provide a proper
            <br />
            evaluation and best quality education for our students. We care for
            the
            <br />
            growth of our students and we are willing to provide it for them.
          </p>

          <Heading>Find Us</Heading>
          <text style={{ color: "white" }}>
            <Address style={{ height: "30px", width: "30px" }} />
            Blk. 68, Cacawaka Meet Road, Sowicked, PA 15612
          </text>
          <img src={Map} style={{ height: "250px", width: "450px" }} />
          <Heading>ADMINISTRATION</Heading>
        </Column>
      </Container>
    </Box>
  );
};
export default Footer;
