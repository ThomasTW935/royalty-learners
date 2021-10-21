import React from "react";
import Con from "./Form.style";

export default function Overview({
  handleModalClose,
  modal,
  studentInformation,
}) {
  return (
    <div style={{ display: modal === 2 ? "block" : "none" }}>
      <span>name: {studentInformation.name}</span>
      <Con.Buttons>
        <button onClick={handleModalClose}>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
