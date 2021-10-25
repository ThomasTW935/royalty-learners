import React from "react";
import Con from "./Form.style";

export default function ServiceInfo({ handleModalClose, infoModal }) {
  console.log(`Info: ${infoModal}`);
  return (
    <div style={{ display: infoModal ? "block" : "block" }}>
      Service Infomation
      <Con.Buttons>
        <button onClick={handleModalClose}>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
