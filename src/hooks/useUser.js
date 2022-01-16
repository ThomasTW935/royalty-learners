import { useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";

const useUser = () => {
  const baseURL =
    process.env.REACT_APP_BACKEND_BASEURL || "http://localhost:5000";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const history = useHistory()

  const checkLoggedIn = async () => {
    try {
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
      console.log(userData)
    } catch (err) {
      err.msg && setError(err.msg);
    }
  };

  async function login(credentials) {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${baseURL}/api/users/login`, credentials);
      setUserData({
        token: response.data.token,
        user: response.data.user,
      });
      localStorage.setItem("auth-token", response.data.token);
      history.push("/dashboard")
    } catch (err) {
      err.msg && setError(err.msg);
    }
    setLoading(false);
  }
  async function logout() {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/")
  }
  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`${baseURL}/api/users/all`);
      console.log(response.data)
      return response.data
    } catch (err) {
      err.msg && setError(err.msg);
    }
    setLoading(false);
  }
  async function fetchUser(id) {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post(`${baseURL}/api/users/`, {user:id});
      console.log(response.data)
      return response.data
    } catch (err) {
      err.msg && setError(err.msg);
    }
    setLoading(false);
  }
  return {
    loading,
    error,
    userData,
    setUserData,
    checkLoggedIn,
    login,
    logout,
    fetchUsers,
    fetchUser
  };
};

export default useUser;
