import React from "react";
import { Container, Column, Heading } from "./about-us-style";
export default function AboutUs() {
  return (
    <Container id="aboutus" >
      <Column>
        <Heading style={{ color: "black", marginTop: "5rem" }}>
          About Us
        </Heading>
        <p style={{ color: "red", marginBottom: "5rem" }}>
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
      </Column>
      <Column>
        <Column>
          <Heading style={{ color: "black", marginTop: "5rem" }}>
            Our Mission
          </Heading>
          <p style={{ color: "red", marginBottom: "5rem" }}>
            The Royalty Learning Center helps children
            <br />
            with special needs to grow and achieve their fullest
            <br />
            potential by going through our offered services.
          </p>
          <Heading style={{ color: "black", marginTop: "-3rem" }}>
            Our Vision
          </Heading>
          <text style={{ color: "white" }}></text>
          <p style={{ color: "red", marginBottom: "1rem" }}>
            We envision the Royalty Learning Center as:
            <br />
            • A provider of special education and supportive services
            <br />
            to children going through Pre-School to Senior High School;
            <br />
            • The place that parents of children with special education needs
            <br />
            turn to for information and help;
            <br />
            • The first choice of schools and professionals who need
            professional
            <br />
            development services so that they can better serve children with
            special needs;
            <br />
            • An organization that is recognized for its expert, professional,
            <br />
            and compassionate staff, who do whatever needs to be done
            <br />
            to help children with special needs grow and achieve their
            <br />
            fullest potential that they can carry throughout their lives.
          </p>
        </Column>
      </Column>
    </Container>
  );
}
