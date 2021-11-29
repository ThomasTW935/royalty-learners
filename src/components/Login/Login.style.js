import styled from "styled-components";

const LoginForm = styled.form`
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  display:flex;
  flex-direction: column;
  gap: .5rem;
`
const label = styled.label`
  input{
    border: 1px solid rgba(0,0,0,.3);
    padding: .5rem;
    margin: .5rem 0;
    width: 100%;
  }
`

const button = styled.button`
  margin: 0 auto;
`

LoginForm.Label = label
LoginForm.Button = button

export default LoginForm