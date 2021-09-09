import React, { useState, useEffect } from 'react'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
const Service = () => {
    const [datas, setdatas] = useState({})
    const history = useHistory()
    const callabout = async () => {
        try {
            const res = await fetch("/service", {
                method: "GET",
                headers: {

                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            setdatas({ ...datas, name: data.name, email: data.email, phone: data.phone })
            //.log(datas);
            console.log(("contacservice page"));
            ///console.log(data);
            if (!res.status === 200) {
                const err = new Error(res.error)
                throw err
            }
        } catch (e) {
            console.log(e);
            history.push("/signin")
            console.log("signin");
        }
    }


    useEffect(() => {
        callabout();
    }, [])

    const getvalue = (pre) => {
        const name = pre.target.name
        const value = pre.target.value
        setdatas({ ...pre, [name]: value })

    }

    const message = async (e) => {
          try{

              e.preventDefault()
              
              console.log("hdfjkhd")
              const { name, email, phone, message } = datas
              //console.log({...datas,message:""})
              console.log({...setdatas})
              const res = await fetch("/message", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                    }
                    , body: JSON.stringify({ name, email, phone, message })
                })
                alert("message is send successfull")
                //message=" "
                const datamessage = await res.json()
            
                if (!datamessage) {
                    console.log("measage not send")
                    alert("message is send successfull")   
                }
               else {
                   console.log(...datas)
                     //setdatas({...datas, });
                    alert("message is send successfull")
                    
                }
                
            }catch(e){console.log(e)}

    }











    return (
        <>
            <div className="contianer-fluid ">
                <div className="container ">
                    <div className="row  d-flex  serviceregister">


                        <div className=" col-lg-4 ">
                            <div className="contact_info_iteam  d-flex justify-content-center">
                                <PersonIcon></PersonIcon>
                                <div >
                                
                                        name
                                     
                                    <div className="contact_info_tittle">
                                        <input className="servicetext" type="text " placeholder="name" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" col-lg-4 offset-lg-col-1  All">
                            <div className="contact_info_iteam  d-flex justify-content-center">
                                <PhoneIphoneIcon></PhoneIphoneIcon>
                                <div>
                    
                                        nmae
                                     
                                    <div className="contact_info_tittle">
                                        <input className="servicetext" placeholder="phone"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className=" col-lg-4 offset-lg-col-1 ">
                            <div className="contact_info_iteam  d-flex justify-content-center">
                                <EmailIcon></EmailIcon>
                                <div>
                            
                                        email
                                     
                                    <div className="contact_info_tittle">
                                        <input className="servicetext"type="number" placeholder="phone" />
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
                <div className="contact_form  servicegettouch ">
                    
                        <div className=" row my-auto">
                            <div className="col-lg-10 offset-lg-1 '">
                                <div className=" contact_form_container ">
                                    <div className="contact_form_tittle">
                                      <strong>Get In Touch</strong>  

                                  </div>
                                    <form id="form" method="POST">
                                        <div className=' d-flex  servicethreeinputbox justify-content-lg-between justify-content-center align-items-center'>
                                            <input   className="serviceinput"  type="text " placeholder="Name" name="name" onChange={getvalue} value={datas.name} />


                                            <input className="serviceinput" type="email " placeholder="email" name="email" onChange={getvalue} value={datas.email} />


                                            <input className="serviceinput" type="number" placeholder="phone" name="phone" onChange={getvalue} value={datas.phone} />
                                        </div>
                                        <div >
                                            <textarea className="contactfrom " placeholder="message" name="message" onChange={getvalue}></textarea>

                                        </div>
                                        <div className="button">
                                        <Button className="buttons" onClick={message}><strong>send message</strong></Button>

                                            
                                        </div>
                                    </form>
                                </div>

                            </div>

                        

                    </div>

                </div>


            </div>
        </>
    )
}
export default Service