import React, { useEffect, useState ,useContext} from 'react'
import im from '../hacker.png'
import { useHistory } from 'react-router-dom'
import {userContext} from '../App.js'
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
    const {state,dispatch}= useContext(userContext)
    const [datas, setdatas] = useState({})
    const history = useHistory()



    const callabout = async () => {
        try {
            const res = await fetch("/contact", {
                method: "GET",

                headers: {
                    Accept: "appllication/json",
                    'Content-Type': 'application/json'
                },
                credentials: "include"

            })

            const data = await res.json()
            setdatas(data)


            //.log(datas);
            console.log(("contact get page"));
            if (!res.status === 200) {
                const err = new Error(res.error)
                throw err
            }
        } catch (e) {
           
            console.log(e);
          
            toast("please login", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            history.push("/signin")

        }
    }

    useEffect(() => {
        callabout();
    }, [])


    return (
        <>
            <div className="container-fluid  start All">
                <div className="row second  All ">
                    <div className="col-lg-10 offset-1 d-flex justify-content-center align-items-center justify-content-md-between All">
                        <div className="col-2 imag  All ">
                            <img src={im} />
                        </div>

                        <div className="col-5 d-flex flex-wrap All">
                            <div>

                                <h3>welcome</h3>
                                <h1>{datas.name}</h1>


                            </div>
                        </div>

                        <div className="col-2 imag All">
                            <div className=" d-flex All">
                                <h1>Editor</h1>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="three  p-5">
                    <div className="insidethree d-flex">


                        <div className="col-4 d-flex flex-column All">
                            <p>
                                work linli
</p>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">{datas.name}</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">{datas.email}</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>
                            <a href="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" target="thapa">Prashant</a>


                        </div>
                        <div className="col-md-8 All" >
                            <div id="Profilee">
                                <div className="tab" >
                                    <div className=" row  font-weight-bold fn"></div>
                                        <div className="d-flex  mx-5 my-4 ">
                                        <div>       
                                                <h3>about</h3>
                                            </div>
                                            <div>
                                                <h3>timeline</h3>
                                            </div>
                                         </div>


                                        <div className="col-md-6">
                                            <label htmlFor="user-10">user</label>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">user</label>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">user</label>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">user</label>
                                        </div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">user</label>
                                        </div>
                                        <div className="col-md-6">55555</div>


                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>

                                        <div className="col-md-6">
                                            <label htmlFor="user-10">Name</label>
                                        </div>
                                        <div className="col-md-6">Prashant</div>


                                    </div>

                                </div>

                            </div>
                        </div>

                     
                    

                </div>
            </div>
        </>
    )
}

export default Contact;



