import React, {useState} from 'react'
import LoginForm from "./Login.style"
import PropTypes from 'prop-types'
import useUser from '../../hooks/useUser'
import {UserNinja} from "@styled-icons/fa-solid"
import ErrorNotice from '../ErrorNotice/ErrorNotice'

export default function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const {userData,error,setError,login} = useUser()

  async function handleSubmit(e){
    e.preventDefault()
    const credentials = {username,password}
    login(credentials)
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