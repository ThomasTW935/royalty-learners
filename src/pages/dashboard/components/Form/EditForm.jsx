import {useState} from "react"
import Con from "./Form.style"

export default function EditForm({selectedID}) {
  const {username, setUsername} = useState("")
  const {password, setPassword} = useState("")
  const {firstName, setFirstName} = useState("")
  const {lastName, setLastName} = useState("")
  function handleSubmit(e){
    e.preventDefault()
  }
  console.log("Selected ID: "+selectedID)
  return (
    <Con>
      <Con.Close>X</Con.Close>
      <Con.Section>
        <label>Username</label>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>
      </Con.Section>
      <Con.Section>
        <label>Password</label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Con.Section>
      <Con.Section>
        <label>First Name</label>
        <input type="text" onChange={(e)=>{setFirstName(e.target.value)}}/>
      </Con.Section>
      <Con.Section>
        <label>Last Name</label>
        <input type="text" onChange={(e)=>{setLastName(e.target.value)}}/>
      </Con.Section>
        <button onClick={handleSubmit}>Submit</button>
    </Con>
  )
}
