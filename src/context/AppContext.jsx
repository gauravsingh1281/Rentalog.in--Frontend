import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
export const Appcontext=createContext()
export default function AppcontextProvider({children}){
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const navigate=useNavigate()
  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === data.email && storedUser.password === data.password) {
     setIsLoggedIn(true)
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
 };
 console.log(isLoggedIn)
    const value={
        isLoggedIn,setIsLoggedIn,onSubmit
    }    
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}