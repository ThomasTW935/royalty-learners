import axios from "axios"
import { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase"
import { usersApi } from "../config/apiRoutes"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function signup(email, password) {
    setIsLoggedIn(true)
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    setIsLoggedIn(true)
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    setIsLoggedIn(false)
    return auth.signOut()
  }
  function setUser(data) {
    setCurrentUser((prevState) => {
      let newState = {
        ...prevState,
        _id: data._id,
        first_name: data.first_name,
        last_name: data.last_name,
        firebase_uid: data.firebase_uid,
      }
      return newState
    })
  }
  function getUser() {
    return {
      _id: currentUser._id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      active: currentUser.active,
    }
  }
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubcribe
  }, [])
  useEffect(() => {
    async function getUser() {
      const response = await axios.get(usersApi + `/${currentUser.uid}`)
      setUser(response.data)
    }
    if (currentUser != null) {
      getUser()
      return
    }
  }, [currentUser?.uid])
  const value = {
    currentUser,
    isLoggedIn,
    setCurrentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    getUser,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
