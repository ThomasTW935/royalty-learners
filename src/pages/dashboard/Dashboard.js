import React, { useEffect } from "react";
import Login from "../../components/Login/Login";
import UserContext from "../../context/UserContext";
import useUser from "../../hooks/useUser";
import Table from "../../components/Table/Table";
import NavBar from "./components/NavBar"

export default function Dashboard() {
  const { userData, setUserData, checkLoggedIn } = useUser();

  useEffect(() => {
    checkLoggedIn();
  }, []);
  console.log(userData.data);
  if (!userData.data?.token === undefined) {
    return <Login />;
  }

  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar/>
        <h1>Dashboard</h1>

        <Table />
      </UserContext.Provider>
    </div>
  );
}
