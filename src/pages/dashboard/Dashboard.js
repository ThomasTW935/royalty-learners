import React,{useState,useEffect} from 'react'
import Login from '../../components/Login/Login'
import useToken from '../../hooks/useToken'


export default function Dashboard() {
  const {token,setToken} = useToken()
  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
