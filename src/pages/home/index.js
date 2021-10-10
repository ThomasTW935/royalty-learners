import React from "react";
import Board from "./Home.style";
import { Contacts, AboutUs, Tutor } from "../";
import Services from "../services";

export default function Home() {
  return (
    <main>
      <Board id="home">
        <div>
          <h1>Here at SM </h1>
          <p></p>
          <h3>We Got it all for you!</h3>
        </div>
      </Board>
      <Services />
      <Tutor />
      <AboutUs />
      <Contacts />
    </main>
  );
}
