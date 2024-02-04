import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


//confusing

export default function Protected({children,authentication=true}){

    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector((state)=>state.status)

    useEffect(()=>{

        if(authentication && authStatus !== authentication){
            navigate("/login")

        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }

        setLoader(false)    //this statemen will be exectued in always
    },[authStatus,navigate,authentication])

    return loader?<h1>Loading ...</h1> : <>{children}</>
}