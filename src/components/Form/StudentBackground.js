import React from "react";
import Con from "./Form.style";

export default function StudentBackground({
  handleModalClose,
  modal,
  setModal,
  studentInformation,
  setStudentInformation,
}) {
  return (
    <div style={{ display: modal === 1 ? "block" : "none" }}>
      <Con.Section>
        <label>Background of the Student</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Student' Daily Schedule of Activities</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Personality of the Student</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Daily / Monthly Goals of the Parents </label>
        <input type="text" />
      </Con.Section>
      <Con.Buttons>
        <button type="button" onClick={() => setModal(modal + 1)}>
          Proceed
        </button>
        <button type="button" onClick={handleModalClose}>
          Cancel
        </button>
      </Con.Buttons>
    </div>
  );
}
