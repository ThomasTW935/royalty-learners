import React from "react";
import Con from "./Form.style";

export default function Form({ isModalOpen, setIsModalOpen }) {
  return (
    <Con style={{ display: !isModalOpen ? "none" : "block" }}>
      <Con.Form>
        <h2>Second Form</h2>
        <Con.Close
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          X
        </Con.Close>
        <Con.Section>
          <label>Student Name</label>
          <input type="text" />
        </Con.Section>
        <Con.Section>
          <label>Nickname</label>
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
          <button>Proceed</button>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Cancel
          </button>
        </Con.Buttons>
      </Con.Form>
    </Con>
  );
}
