import React from "react";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

function LogoutBtn({
    className="",
}){

    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{ 
            dispatch(logout())
        })
    }
    return (
        <button 
            className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${className}`} 
            onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn