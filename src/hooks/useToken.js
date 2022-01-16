import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function useToken() {
  const baseURL =
    process.env.REACT_APP_BACKEND_BASEURL || "http://localhost:5000";
  const [error, setError] = useState("");
  const history = useHistory();
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    console.log(JSON.stringify(userToken))
    sessionStorage.setItem("token",JSON.stringify(userToken.token));
    setToken(userToken.token);
  };
  const logout = () => {
    sessionStorage.removeItem("token");
    setToken("");
    history.push("/");
  };
  async function login(credentials) {
    
    try {
      setError("");
      const response = await axios.post(
        `${baseURL}/api/users/login`,
        credentials
      );
      return response.data
    } catch (err) {
      err.msg && setError(err.msg);
    }
  }

  return {
    error,
    setError,
    setToken: saveToken,
    token,
    logout,
    login
  };
}
