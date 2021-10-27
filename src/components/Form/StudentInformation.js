import React, { useEffect } from "react";
import Con from "./Form.style";

export default function StudentInformation({
  handleModalClose,
  modal,
  setModal,
  studentInformation,
  setStudentInformation,
}) {
  function handleContactNo(e) {
    console.log(e.target.value);
  }
  console.log(modal);
  return (
    <div style={{ display: modal === 0 ? "block" : "none" }}>
      <Con.Section>
        <label>Student Name</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Nickname</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              nickname: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Language At Home</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              languageAtHome: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Birthday</label>
        <input
          type="date"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              birthday: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Address</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              address: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Male:</label>
        <input type="radio" selected />
        <label>Female:</label>
        <input type="radio" />
      </Con.Section>
      <Con.Section>
        <label>Student Level</label>
        <select>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
          <option>Grade 4</option>
          <option>Grade 5</option>
          <option>Grade 6</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </select>
      </Con.Section>
      <Con.Section>
        <label>Parent/Guardian</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              parentGuardian: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Contact No.</label>
        <input
          type="text"
          onChange={(e) =>
            setStudentInformation((prev) => ({
              ...prev,
              contactNo: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Buttons>
        <button type="button" onClick={() => setModal(modal + 1)}>
          Proceed
        </button>
        <button onClick={handleModalClose}>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
