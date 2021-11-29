import React,{useState} from 'react'
import Login from '../../components/Login/Login'


export default function Dashboard() {
  const [token,setToken] = useState()

  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
