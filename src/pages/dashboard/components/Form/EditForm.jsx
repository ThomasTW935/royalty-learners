import { useState, useEffect, useRef } from "react";
import Con from "./Form.style";
import useUser from "../../../../hooks/useUser";

export default function EditForm({ selectedID = null,setSelectedID, setEditModal }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const { fetchUser,register, updateUser } = useUser();
  async function handleUpdate(e) {
    e.preventDefault();
    await updateUser(selectedID,{
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value
    })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await register({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value
    })
  }
  useEffect(() => {
    async function fetchData() {
      const newData = await fetchUser(selectedID);
      usernameRef.current.value = newData.username;
      firstNameRef.current.value = newData.firstName;
      lastNameRef.current.value = newData.lastName;
    }
    if(selectedID)  fetchData();
  }, []);
  function handleClose(){
    setEditModal(false)
    setSelectedID(null)
  }
  console.log("Selected ID: " + selectedID);
  return (
    <Con>
      <Con.Close
        type="button"
        onClick={handleClose}
      >
        X
      </Con.Close>
      <Con.Section>
        <label>Username</label>
        <input ref={usernameRef} type="text" />
      </Con.Section>
      <Con.Section>
        <label>Password</label>
        <input ref={passwordRef} type="password" />
      </Con.Section>
      <Con.Section>
        <label>First Name</label>
        <input ref={firstNameRef} type="text" />
      </Con.Section>
      <Con.Section>
        <label>Last Name</label>
        <input ref={lastNameRef} type="text" />
      </Con.Section>
      {selectedID === null ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}
    </Con>
  );
}
