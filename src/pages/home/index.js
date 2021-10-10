import React from "react";
import Board from "./Home.style";
import { Contacts, AboutUs, Tutor } from "../";
import Services from "../services";

export default function Home() {
  return (
    <main>
      <Board id="home">
        <h1>Learn - Create - Achieve</h1>
        <h2>We Got it all for you!</h2>
      </Board>
      <Services />
      <Tutor />
      <AboutUs />
      <Contacts />
    </main>
  );
}
