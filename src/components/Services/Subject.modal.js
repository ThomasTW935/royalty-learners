import React from "react";
import { subjects } from "../../data/services";
import SubjectCon from "./Subject.style";
import { CloseOutline } from "@styled-icons/evaicons-outline";

export default function Subject({ modal }) {
  return (
    <>
      <SubjectCon.Bg modal={modal} />
      <SubjectCon modal={modal}>
        <SubjectCon.Close>
          <CloseOutline size={30} />
        </SubjectCon.Close>
        <SubjectCon.Subjects>
        {subjects.map((subject) => (
          <SubjectCon.Subject>
            <img src={subject.src} alt={subject.title}/>
            <div>
              <h3>{subject.title}</h3>
              <p>{subject.Description}</p>
            </div>
          </SubjectCon.Subject>
        ))}
        </SubjectCon.Subjects>
      </SubjectCon>
    </>
  );
}
