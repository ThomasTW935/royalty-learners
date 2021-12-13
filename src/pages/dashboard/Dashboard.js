import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Login from '../../components/Login/Login'
import useToken from '../../hooks/useToken'
import UserContext from "../../context/UserContext";
import useUser from "../../hooks/useUser"
export default function Dashboard() {
  // const {token,setToken} = useToken()
  const {userData, setUserData, checkLoggedIn} = useUser()
  useEffect(() => {
    checkLoggedIn();
  }, []);
  if(!userData){
    return <Login/>
  }
  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        <h1>Dashboard</h1>
      </UserContext.Provider>
    </div>
  )
}
