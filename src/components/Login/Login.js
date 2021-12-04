import React, {useState} from 'react'
import LoginForm from "./Login.style"
import PropTypes from 'prop-types'
import useLogin from '../../hooks/useLogin'
import {UserNinja} from "@styled-icons/fa-solid"


export default function Login({setToken}) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const {handleLogin} = useLogin()

  async function handleSubmit(e){
    e.preventDefault()
    const token = await handleLogin({
      username,password
    })
    console.log(token.data)
    setToken(token.data)
  }

  return (
    <LoginForm.Bg>
    <LoginForm onSubmit={handleSubmit}>
      <UserNinja/>
      <LoginForm.Label>
        <p>Username:</p>
        <input type='text' onChange={(e)=> {setUsername(e.target.value)}}/>
      </LoginForm.Label>
      <LoginForm.Label>
        <p>Password:</p>
        <input type='password' onChange={(e)=> {setPassword(e.target.value)}}/>
      </LoginForm.Label>
      <LoginForm.Button>Login</LoginForm.Button>
    </LoginForm>
    </LoginForm.Bg>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
