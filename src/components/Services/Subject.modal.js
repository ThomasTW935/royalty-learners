import React from "react";
import {subjects} from "../../data/services" 
import SubjectCon from "./Subject.style"

export default function Subject({modal}) {
  return (
    <>
      <SubjectCon.Bg  modal={modal}/>
      <SubjectCon.Modal modal={modal}>
        <button>X</button>
        {
          subjects.map(subject=> 
            <>
              aasdasd
            </>
            )
        }

      </SubjectCon.Modal>
    </>
  );
}
