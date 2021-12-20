import styled from "styled-components";
import Modal from "../../core-ui/Modal.style";

const SubjectCon = styled(Modal)`
  flex-direction: column;
  max-height: 70vh;
  width: 100%;
  max-width: 60vw;
  `;

const subjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 2rem;
  overflow: auto;
  `;
const subject = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
  }
  p{
    font-size: .9rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const cta = styled.button`
 align-self: center;
    margin: 1rem 0 .5rem;
    cursor: pointer;
`

SubjectCon.Subjects = subjects;
SubjectCon.Subject = subject;
SubjectCon.CTA = cta

export default SubjectCon;
