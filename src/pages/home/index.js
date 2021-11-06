import React from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import Contacts from "../../components/Contacts";
import AboutUs from "../../components/AboutUs";
import { ClipboardCheckmark } from "@styled-icons/fluentui-system-regular";
import { Like, UserPlus } from "@styled-icons/boxicons-regular";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div>
        <h2> Request a Tutor via our simple 3-Step Process </h2>
        <ul>
          <li>
            <ClipboardCheckmark width={30} height={30} />
            <p>asdlkmalskdm</p>
          </li>
          <li>
            <Like width={30} height={30} />
            <p>asdlkmalskdm</p>
          </li>
          <li>
            <UserPlus width={30} height={30} />
            <p>asdlkmalskdm</p>
          </li>
        </ul>
      </div>
      <Services />
      <AboutUs />
      <Contacts />
    </main>
  );
}
