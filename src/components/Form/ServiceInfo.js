import React from "react";
import Con from "./Form.style";

export default function ServiceInfo({ infoModal, setInfoModal }) {
  console.log(`Info: ${infoModal}`);

  function handleModalClose() {
    setInfoModal(false);
  }
  return (
    <Con style={{ display: !infoModal ? "none" : "block" }}>
      <Con.Form>
        <Con.Title>
          <h2>Details</h2>
        </Con.Title>
        <heading style={{ fontWeight: "Bold" }}> Mathematics</heading>
        <span>
          This subject provides a basic math concept that will help the students
          to apply
          <br />
          it in their lives.Our students will learn to count and use interactive
          resources
          <br />
          such as puzzles, pattern blocks, and scales to learn about number
          recognition,
          <br />
          number sequencing, matching, sorting, and memory.
        </span>

        <heading style={{ fontWeight: "Bold" }}> English</heading>
        <span>
          This subject provides explicit, systematic instruction in vocabulary.
          Our students
          <br />
          will be able to learn a lot of new words that they are not familiar
          with, and they
          <br />
          will develop a rich understanding of their meaning and use.
        </span>

        <heading style={{ fontWeight: "Bold" }}> Science</heading>
        <span>
          This subject provides developmentally appropriate activities that will
          help students
          <br />
          further their growth and development skills. Our students will learn
          toobserve
          <br />
          and explore new things about the world andanimals through hands-on
          activities.
        </span>
        <Con.Close type="button" onClick={handleModalClose}>
          X
        </Con.Close>
      </Con.Form>
    </Con>
  );
}
