import React from "react";
import Con from "./Form.style";

export default function ServiceInfo({ handleModalClose, infoModal }) {
  console.log(`Info: ${infoModal}`);
  return (
    <div style={{ display: infoModal ? "block" : "none" }}>
      <Con.Title>Service Infomation</Con.Title>
      <Con.Buttons onClick={handleModalClose}>
        <button>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
