import { useEffect, useMemo, useState } from "react";
import Login from "../../components/Login/Login";
import UserContext from "../../context/UserContext";
import useUser from "../../hooks/useUser";
import Table from "../../components/Table/Table";
import NavBar from "./components/NavBar";

export default function Dashboard() {
  const { userData, setUserData, checkLoggedIn, fetchUsers } = useUser();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (userData.data?.token === undefined) {
    return <Login />;
  }
  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar />
        <h1>Dashboard</h1>

        <Table/>
      </UserContext.Provider>
    </div>
  );
}
