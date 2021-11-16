import React from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import Contacts from "../../components/Contacts";
import AboutUs from "../../components/AboutUs";
import Teachers from "../../components/Teachers";
import EnrollmentProcess from "../../components/EnrollmentProcess";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EnrollmentProcess/>
      <Services />
      <Teachers/>
      <AboutUs />
      <Contacts />
    </main>
  );
}
