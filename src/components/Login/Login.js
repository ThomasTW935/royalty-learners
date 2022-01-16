import React, {useState} from 'react'
import LoginForm from "./Login.style"
import useToken from '../../hooks/useToken'
import {UserNinja} from "@styled-icons/fa-solid"
import ErrorNotice from '../ErrorNotice/ErrorNotice'

export default function Login({setToken}) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const {error,setError,login} = useToken()
  async function handleSubmit(e){
    e.preventDefault()
    const credentials = {username,password}
    const token = await login(credentials)
    setToken(token)
  }
  return (
    <LoginForm.Bg>
    <LoginForm onSubmit={handleSubmit}>
      {error && <ErrorNotice message={error} clearError={()=> setError(undefined)}/> }
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