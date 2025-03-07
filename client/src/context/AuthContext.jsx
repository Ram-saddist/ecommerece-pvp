import { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext= createContext()
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const navigate =useNavigate()
    useEffect(()=>{
        const token =localStorage.getItem("token")
        const role = localStorage.getItem("role")
        if(token && role){
            setUser({token,role})
        }
    },[])
    return <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
}