import React from "react";
import Con from "./Form.style";

export default function Overview({
  handleModalClose,
  modal,
  studentInformation,
}) {
  return (
    <div style={{ display: modal === 2 ? "block" : "none" }}>
      <span>Student Name: {studentInformation.name}</span>
      <br />
      <span>Nickname: {studentInformation.nickname}</span>
      <br />
      <span>Language at Home: {studentInformation.languageAtHome}</span>
      <br />
      <span>Birthday: {studentInformation.birthday}</span>
      <br />
      <span>Address: {studentInformation.address}</span>
      <br />
      <span>Student Level: {studentInformation.studentLevel}</span>
      <br />
      <span>Parent / Guardian: {studentInformation.parentGuardian}</span>
      <br />
      <span>Contact Number: {studentInformation.contactNo}</span>
      <Con.Buttons>
        <button onClick={handleModalClose}>Cancel</button>
      </Con.Buttons>
    </div>
  );
}
