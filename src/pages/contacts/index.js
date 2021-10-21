import React from "react";
import { FacebookSquare } from "@styled-icons/fa-brands";
import { Youtube } from "@styled-icons/bootstrap";
import { Instagram } from "@styled-icons/bootstrap";
import { Twitter } from "@styled-icons/evaicons-solid";
import { Phone } from "@styled-icons/feather";
import { Email } from "@styled-icons/material-outlined";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Contacts.style";

const Footer = () => {
  return (
    <Box id="contacts">
      <h1 style={{ color: "White", textAlign: "left" }}>Royalty Learners</h1>
      <Container>
        <Column>
          <Heading>About Us</Heading>
          <FooterLink href="#">Aim</FooterLink>
          <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </Column>
        <Column>
          <Heading>Services</Heading>
          <FooterLink href="#">Writing</FooterLink>
          <FooterLink href="#">Internships</FooterLink>
          <FooterLink href="#">Teaching</FooterLink>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">
            <Phone size={24} /> 09724456
          </FooterLink>
          <FooterLink href="#">
            <Email size={24} />
            RoyaltyLearners@gmail.com
          </FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <span></span>
          </FooterLink>
          <FooterLink href="#">
            <span>
              <Instagram size={24} />
              Instagram
            </span>
          </FooterLink>
          <FooterLink href="#">
            <span>
              <Twitter size={30} />
            </span>
          </FooterLink>
          <FooterLink href="#">
            <span>
              <Youtube size={30} />
            </span>
          </FooterLink>
        </Column>
      </Container>
    </Box>
  );
};
export default Footer;
