import React, { useEffect,useContext } from 'react'
import { useHistory } from 'react-router'

import {userContext} from '../App.js'
const Logout=()=>{

    const {state,dispatch}= useContext(userContext)
    const history = useHistory()
    const logoutget=async()=>{
        try{
            const res = await fetch("/logout",{
                method:"GET",
            headers:{
                Accept :"appllication/json",
                "Content-Type":"application/json"
            },
            credentials:'include'
            
        })
        const data = await res.json()
        console.log("done");
        console.log(state)
        
        if (!res.status === 200) {
            console.log("lhggggnoyy")
            const err = new Error(res.error)
            throw err
        }
    }catch(e){
        dispatch({type:"USER",payload:false})
        console.log("done");
history.push("/signin")
        console.log(e);
    }

    }

    useEffect(()=>{
        logoutget()
    })
    return(
        <>
        <div className="container-fluid d-flex justify-content-center align-items-center loginoutfont">
             <h1>Thanks For Visit</h1>
             <h2>Hope ! You Enjoyed Too .......</h2>
             <h3>....."Bye".......</h3>

        </div>
        </>
    )
}

export default Logout;