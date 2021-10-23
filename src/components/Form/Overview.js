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
      <br />
      <span>nickname: {studentInformation.nickname}</span>
      <br />
      <span>birthday: {studentInformation.birthday}</span>
      <br />
      <span>address: {studentInformation.address}</span>
      <br />
      <span>parentGuardian: {studentInformation.parentGuardian}</span>
      <br />
      <span>contactNo: {studentInformation.contactNo}</span>
      <Con.Buttons>
        <button onClick={handleModalClose}>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
