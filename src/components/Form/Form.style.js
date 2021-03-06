import styled from "styled-components";

const Con = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  button {
    cursor: pointer;
  }
`;

const form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 75ch;
  min-width: 50ch;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 100;
`;

const title = styled.div`
  background-color: #047af6;
  font-size: 18px;
  padding: .5rem;
  margin: -1rem -1rem 1rem -1rem;
`;

const section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  input {
    border: 1px solid #111;
  }
`;

const radioGroup = styled(section)`
  flex-direction:row;
  div{
    display:flex;
    flex-direction: column;
  }
`



const buttons = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const close = styled.button`
  background: none;
  border: 0;
  transition: 0.2s ease-in-out;
  font-size: 1.2rem;
  position: absolute;
  top: 0%;
  right: 0;
  padding: 1rem;
  &:hover {
    transform: scale(1.2);
  }
`;

Con.Form = form;
Con.Section = section;
Con.RadioGroup = radioGroup;
Con.Close = close;
Con.Buttons = buttons;
Con.Title = title;
export default Con;
