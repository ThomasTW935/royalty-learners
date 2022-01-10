import { useEffect, useMemo, useState } from "react";

import useUser from "../../hooks/useUser";
import Table from "../../components/Table/Table";
import NavBar from "./components/NavBar";
import {useHistory} from "react-router-dom"

export default function Dashboard() {
  const { userData, checkLoggedIn } = useUser();
  const history = useHistory()
  useEffect(() => {
    checkLoggedIn();
  }, []);
  if(!userData.user) console.log("Userdata: " + userData.user);
  console.log(userData)
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
      <Table />
    </div>
  );
}
