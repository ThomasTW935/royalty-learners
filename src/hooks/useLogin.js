import {useState} from 'react'
import axios from 'axios'

const useLogin  = ()=> {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const baseURL = process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000'
  async function handleLogin(credentials) {
    try {
      setLoading(true)
      setError('')
      const response = axios.post(`${baseURL}/login`, credentials)
      return response
    } catch (err) {
      setError('Failed to login')
    }
    setLoading(false)
  }
  return {
    loading,
    error,
    handleLogin
  }
}

export default useLogin