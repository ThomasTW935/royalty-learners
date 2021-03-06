import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-height: 75ch;
  min-width: 70ch;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background: white;
  border-radius: 5px;
  display: ${(props) => (props.modal ? "flex" : "none")};
`;

const bg = styled.div`
  display: ${(props) => (props.modal ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
`;

Modal.Bg = bg;
Modal.Close = close;

export default Modal;
