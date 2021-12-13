import React, {useState} from 'react'
import LoginForm from "./Login.style"
import PropTypes from 'prop-types'
import useUser from '../../hooks/useUser'
import {UserNinja} from "@styled-icons/fa-solid"
import {useHistory} from 'react-router-dom'
import ErrorNotice from '../ErrorNotice/ErrorNotice'

export default function Login({setToken}) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const {error,setError,setUserData,login} = useUser()
  const history = useHistory()

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
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
