import React from "react";
import child from "../../assets/images/cutekids.png";
import { Container, Column, Heading } from "./about-us-style";
export default function AboutUs() {
  return (
    <Container id="aboutus">
      <Column>
        <Heading
          style={{ color: "yellow", marginTop: "5rem", fontSize: "1.5rem" }}
        >
          About Us
        </Heading>
        <p style={{ color: "black", marginBottom: "2rem", fontSize: "1.2rem" }}>
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
        <img src={child} style={{ height: "300px", width: "500px" }} />
      </Column>
      <Column>
        <Column>
          <Heading
            style={{ color: "yellow", marginTop: "5rem", fontSize: "1.5rem" }}
          >
            Our Mission
          </Heading>
          <p
            style={{ color: "black", marginBottom: "2rem", fontSize: "1.2rem" }}
          >
            The Royalty Learning Center helps children
            <br />
            with special needs to grow and achieve their fullest
            <br />
            potential by going through our offered services.
          </p>
          <Heading
            style={{ color: "yellow", marginTop: "-.5rem", fontSize: "1.5rem" }}
          >
            Our Vision
          </Heading>
          <text style={{ color: "white" }}></text>
          <p
            style={{
              color: "black",
              marginBottom: "-2rem",
              fontSize: "1.2rem",
            }}
          >
            We envision the Royalty Learning Center as:
            <br />
            • A provider of special education and supportive services
            <br />
            to children going through Pre-School to Senior High School;
            <br />
            • The place that parents of children with special education
            <br />
            needs turn to for information and help;
            <br />
            • The first choice of schools and professionals who need
            <br />
            professional development services so that they
            <br />
            can better serve children with special needs;
            <br />
            • An organization that is recognized for its expert,
            <br />
            professional, and compassionate staff,
            <br />
            who do whatever needs to be done to help
            <br />
            children with special needs grow and
            <br />
            achieve their fullest potential that they can carry
            <br />
            throughout their lives.
          </p>
        </Column>
      </Column>
    </Container>
  );
}
