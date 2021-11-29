import React, {useState} from 'react'
import LoginForm from "./Login.style"
import PropTypes from 'prop-types'
import useLogin from '../../hooks/useLogin'


export default function Login({setToken}) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const {handleLogin} = useLogin()

  async function handleSubmit(e){
    e.preventDefault()
    const token = await handleLogin({
      username,password
    })
    console.log(token.data.token)
    setToken(token.data.token)
  }

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginForm.Label>
        <p>Username:</p>
        <input type='text' onChange={(e)=> {setUsername(e.target.value)}}/>
      </LoginForm.Label>
      <LoginForm.Label>
        <input type='password' onChange={(e)=> {setPassword(e.target.value)}}/>
      </LoginForm.Label>
      <LoginForm.Button>Login</LoginForm.Button>
    </LoginForm>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
