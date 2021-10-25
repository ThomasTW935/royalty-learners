import React from "react";
import Board from "./Home.style";
import { Contacts, AboutUs, Tutor, Inquiry } from "../";
import Services from "../services";

export default function Home() {
  return (
    <main>
      <Board id="home">
        <div>
          <h1>
            <span style={{ color: "#45b0cb" }}>Learn</span>
            <span style={{ color: "#f4aa1b" }}>Create</span>
            <span style={{ color: "#8fc049" }}>Achieve</span>
          </h1>
          <h3>Growth Of The Student Is Our Priority</h3>
        </div>
      </Board>
      <Services />
      <AboutUs />
      <Tutor />
      <Contacts />
    </main>
  );
}
