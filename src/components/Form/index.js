import React, { useState, useRef } from "react";
import Con from "./Form.style";
import StudentInformation from "./StudentInformation";
import StudentBackground from "./StudentBackground";
import Overview from "./Overview";

export default function Form({ isModalOpen, setIsModalOpen }) {
  const [modal, setModal] = useState(1);
  const [hasError, setHasError] = useState(false)
  const nextButtonRef = useRef()
  const formCount = 3
  const [studentInformation, setStudentInformation] = useState({
    name: "",
    nickname: "",
    languageAtHome: "",
    birthday: "",
    age: 0,
    address: "",
    studentLevel: "",
    parentGuardian: "",
    contactNo: "",
  });
  const [studentBackground, setStudentBackground] = useState({
    background: "",
    dailyActivities: "",
    personality: "",
    goals: ""
  });

  function handleModalClose() {
    setIsModalOpen(false);
  }
  function validateFields(){
    let data = modal === 0 ? studentInformation : studentBackground
    console.log(data)
    for(let value in data){
      setHasError(false)
      console.log(data[value] === "")
      if(data[value] === "") setHasError(true)
    }
  }
  function handleNext(){
    validateFields()
    
    if(!hasError) {
      setModal(modal + 1)
    }
  }
  return (
    <Con style={{ display: !isModalOpen ? "none" : "block" }}>
      <Con.Form>
        <Con.Title>
          <h2>Online Registration</h2>
        </Con.Title>
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
          studentBackground={studentBackground}
          setStudentBackground={setStudentBackground}
        />
        <Overview
          handleModalClose={handleModalClose}
          modal={modal}
          studentInformation={studentInformation}
          studentBackground={studentBackground}
        />
        <Con.Buttons>
          {modal > 0 && (
            <button type="button" onClick={() => setModal(modal - 1)}>
              Back
            </button>
          )}
          {modal < formCount-1 && (
            <button  ref={nextButtonRef} type="button" onClick={handleNext}>
              Proceed
            </button>
          )}
          {modal >= formCount-1 && (
            <button type="button">
              Submit
            </button>
          )}
        </Con.Buttons>
      </Con.Form>
    </Con>
  );
}
