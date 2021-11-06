import React from "react";
import child from "../../assets/images/cutekids.png";

export default function AboutUs() {
  return (
    <div>
      <section>
        <h2>About Us</h2>
        <p>
          The Royalty Learning Center is a school that is based in the
          Philippines offering educational services for students with
          specialeducation needs.Our school has a team of teachers and medical
          professionals specializing in Special Education to provide a proper
          evaluation and best quality education for our students. Our school
          also has well-designed facilities suited to provide comfort,
          convenience, and productivity boost for the students, parents,
          teachers, and the school staff. We care about the growth of our
          students and we are willing to provide it for them.
        </p>
        {/* <img src={child} alt="bg" /> */}
      </section>
      <section>
        <h2>Our Mission</h2>
        <p>
          The Royalty Learning Center helps children with special needs to grow
          and achieve their fullest potential by going through our offered
          services.
        </p>
        <h2>Our Vision</h2>
        <ul>
          <p>We envision the Royalty Learning Center as:</p>
          <li>
            A provider of special education and supportive services to children
            going through Pre-School to Senior High School;
          </li>
          <li>
            The place that parents of children with special education needs turn
            to for information and help;
          </li>
          <li>
            The first choice of schools and professionals who need professional
            development services so that they can better serve children with
            special needs;
          </li>
          <li>
            An organization that is recognized for its expert, professional, and
            compassionate staff, who do whatever needs to be done to help
            children with special needs grow and achieve their fullest potential
            that they can carry throughout their lives.
          </li>
        </ul>
      </section>
    </div>
  );
}
