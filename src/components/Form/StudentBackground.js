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
        <label>Student Background</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Student' Daily Schedule of Activitites</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Birthday</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Age</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Address</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Student Level</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Parent/Guardian</label>
        <input type="text" />
      </Con.Section>
      <Con.Section>
        <label>Contact No.</label>
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
