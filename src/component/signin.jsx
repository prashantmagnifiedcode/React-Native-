import React, { useState,useContext } from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import "../index.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Button from '@material-ui/icons/Button';
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import {userContext} from '../App.js'

const Signin = () => {

    const [data, setdata] = useState({ email: "", password: "" })
    const {state,dispatch}= useContext(userContext)
    const inputevent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setdata({ ...data, [name]: value });

    }
    


    const sign = async (e) => {
        e.preventDefault()
        try {

            const { email, password } = data
            const res = await fetch("/signin", {
                method: "POST",
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            console.log("sign reaact");
            dispatch({type:"USER",payload:true})
            console.log("signture")
          
            const resdata = await res.json()

        } catch (e) { console.log(e); }

    }

    return (
        <>
            <div className=" sigincontainer container-fluid  my-5 g-2">
                <div className="row ">
                    <div className="col-md-2 dis1">
                        <h1 className="text-left d-flex">Login</h1>

                    </div>
                    <div className="row col-md-10 d-flex dis1 flex-row">
                        <div className="col-2 dis2">
                            <PersonIcon />
                            <label>Name</label>
                            <input className="inputeffect" type="text" name="name" />
                        </div>
                        <div className="col-2 dis2">
                            <label><EmailIcon /></label>
                            <input className="inputeffect"
                                name="email"
                                value={data.email}
                                onChange={inputevent}

                                type="text" />
                        </div>
                        <div className="col-2 dis2">
                            <label><LockIcon /></label>
                            <input className="inputeffect"
                                name="password"
                                value={data.password}
                                onChange={inputevent}
                                type="number" />
                        </div>

                        <div className="col-2 offset-md-3 ">
                            <Button className="buttons" onClick={sign}>signin</Button>
                          
                        </div>



                    </div>
                </div>

                <div className="container-fluid borderc">
                    <h1 className="textwelcome">Welcome</h1>
                    <p>pls login</p>

                </div>

            </div>
        </>
    )
}
export default Signin