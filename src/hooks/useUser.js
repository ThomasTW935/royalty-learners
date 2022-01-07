import {useState} from 'react'
import axios from 'axios'

const useLogin  = ()=> {
  const baseURL = process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000/api'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const checkLoggedIn = async () => {
    try{
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        `${baseURL}/users/tokenIsValid`,
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get(`${baseURL}/users/`, {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }catch(err){
      err.msg && setError(err.msg)
    }
  };

  async function login(credentials) {
    try {
      setLoading(true)
      setError('')
      const response = await axios.post(`${baseURL}/users/login`, credentials)
      console.log(response)
      setUserData({
        token: response.data.token,
        user: response.data.user,
      })
      localStorage.setItem("auth-token", response.data.token)
    } catch (err) {
      err.msg && setError(err.msg)
    }
    setLoading(false)
  }
  async function logout(){
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token","");
  }
  return {
    loading,
    error,
    userData,
    setUserData,
    checkLoggedIn,
    login,
    logout
  }
}

export default useLogin