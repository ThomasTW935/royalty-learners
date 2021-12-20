import React from "react";
import { subjects } from "../../data/services";
import SubjectCon from "./Subject.style";
import { CloseOutline } from "@styled-icons/evaicons-outline";

export default function Subject({ showModal, hideModal }) {
  return (
    <>
      <SubjectCon.Bg modal={showModal} />
      <SubjectCon modal={showModal}>
        <SubjectCon.Close onClick={hideModal}>
          <CloseOutline size={30} />
        </SubjectCon.Close>
        <SubjectCon.Subjects>
          {subjects.map((subject) => (
            <SubjectCon.Subject>
              <div>
                <img src={subject.src} alt={subject.title} />
              </div>
              <div>
                <h4>{subject.title}</h4>
                <p>{subject.description}</p>
              </div>
            </SubjectCon.Subject>
          ))}
        </SubjectCon.Subjects>
        <SubjectCon.CTA>Register</SubjectCon.CTA>
      </SubjectCon>
    </>
  );
}
