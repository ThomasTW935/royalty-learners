import React from "react";
import Con from "./Form.style";

export default function StudentBackground({
  handleModalClose,
  modal,
  setModal,
  studentBackground,
  setStudentBackground,
}) {
  return (
    <div style={{ display: modal === 1 ? "block" : "none" }}>
      <Con.Section>
        <label>Background of the Student</label>
        <textarea
          rows="3"
          onChange={(e) =>
            setStudentBackground((prev) => ({
              ...prev,
              background: e.target.value,
            }))
          }
        />
      </Con.Section>
      <Con.Section>
        <label>Student's Daily Schedule of Activities</label>
        <textarea rows="3" onChange={(e) =>
            setStudentBackground((prev) => ({
              ...prev,
              dailyActivities: e.target.value,
            }))
          }></textarea>
      </Con.Section>
      <Con.Section>
        <label>Personality of the Student</label>
        <textarea
          rows="3"
          onChange={(e) =>
            setStudentBackground((prev) => ({
              ...prev,
              personality: e.target.value,
            }))
          }
        ></textarea>
      </Con.Section>
      <Con.Section>
        <label>Daily / Monthly Goals of the Parents </label>
        <textarea
          rows="3"
          onChange={(e) =>
            setStudentBackground((prev) => ({
              ...prev,
              goals: e.target.value,
            }))
          }
        ></textarea>
      </Con.Section>
    </div>
  );
}
