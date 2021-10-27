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
        <span>
          asdjashgdakjsgdaksgda
          <br />
          ajdgajsdgajsdgajsgdajghsda
          <br />
          alkshdakshdkajshdkajshdas
        </span>
        <Con.Close type="button" onClick={handleModalClose}>
          X
        </Con.Close>
      </Con.Form>
    </Con>
  );
}
