import styled from "styled-components"
import Modal from "../../core-ui/Modal.style";

 const SubjectCon = styled(Modal)``
 const subjects = styled.section`
  display:flex;
  flex-direction:column;
  gap: .5em;
 `
 const subject = styled.div`
  display:flex;
  img{
    border-radius: 5px;
    width: 100px;
    height: 100px;
  }
  div{
    display:flex;
    flex-direction: column;
  }
 `

 SubjectCon.Subjects = subjects
 SubjectCon.Subject = subject

 export default SubjectCon
