import React, { useState } from "react";
import Con from "./Form.style";
import StudentInformation from "./StudentInformation";
import StudentBackground from "./StudentBackground";
import Overview from "./Overview";

export default function Form({ isModalOpen, setIsModalOpen }) {
  const [modal, setModal] = useState(0);
  const [studentInformation, setStudentInformation] = useState({
    name: "",
    nickname: "",
    birthday: "",
    age: 0,
    address: "",
    studentLevel: "Grade 1",
    parentGuardian: "",
    contactNo: "",
  });

  function handleModalClose() {
    setIsModalOpen(false);
  }
  console.log(studentInformation.name);
  return (
    <Con style={{ display: !isModalOpen ? "none" : "block" }}>
      <Con.Form>
        <h2>Online Registration</h2>
        <Con.Close type="button" onClick={handleModalClose}>
          X
        </Con.Close>
        <StudentInformation
          handleModalClose={handleModalClose}
          modal={modal}
          setModal={setModal}
          studentInformation={studentInformation}
          setStudentInformation={setStudentInformation}
        />
        <StudentBackground
          handleModalClose={handleModalClose}
          modal={modal}
          setModal={setModal}
          studentInformation={studentInformation}
          setStudentInformation={setStudentInformation}
        />
        <Overview
          handleModalClose={handleModalClose}
          modal={modal}
          studentInformation={studentInformation}
        />
        <span>{studentInformation.name}</span>
      </Con.Form>
    </Con>
  );
}
