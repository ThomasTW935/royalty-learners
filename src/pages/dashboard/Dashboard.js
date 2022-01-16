import {  useState } from "react";

import useToken from "../../hooks/useToken";
import Table from "../../components/Table/Table";
import NavBar from "./components/NavBar";
import Login from "../../components/Login/Login"

export default function Dashboard() {
  const {type,setType} = useState()
  const { token, setToken } = useToken();
  console.log(token)
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <NavBar setType={setType} type={type}/>
      <Table/>
    </div>
  );
}
