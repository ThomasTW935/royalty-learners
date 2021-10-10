import React from "react";
import Board from "./Home.style";
import { Contacts, AboutUs, Tutor } from "../";
import Services from "../services";

export default function Home() {
  return (
    <main>
      <Board id="home">
        <h1>Here at SM </h1>
        <h3>We Got it all for you!</h3>
      </Board>
      <Services />
      <Tutor />
      <AboutUs />
      <Contacts />
    </main>
  );
}
