import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
const Home = () => {

    const [data, setdata] = useState({ name: "", email: "", phone: "", work: "", password: "", confirmpassword: "" })
    //let name, value;

    const inputevent = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setdata({ ...data, [name]: value });

    }
    const postdata = async (e) => {
        e.preventDefault()
        const { name, email, phone, work, password, confirmpassword } = data
        const res = await fetch("/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, work, password, confirmpassword })


        })
        const resdata = await res.json()
        console.log(resdata)
        if (res.status === 422 || !resdata) {
            window.alert("invalid")
            console.log("invalid")

        }
        else {
            window.alert("successful")
        }


    }

    return (
        <>
            <div className="contianer registercontainer ">
                <div className="row  col-md-4">

                    <form method="POST">
                        <div className="">
                            <div className="mb-3  ">
                                <h1 >Register</h1>
                            </div>
                            <div className="mb-3 " >
                                <label for="formGroupExampleInput" className="form-label">name</label>
                                <input type="text"
                                    className=" text form-control inputeffect"
                                    value={data.name}
                                    onChange={inputevent}
                                    name="name"
                                    placeholder="name" />
                            </div>
                            <div className="mb-3 " >
                                <label for="formGroupExampleInput" className="form-label">work</label>
                                <input type="text"
                                    className=" text form-control inputeffect"
                                    value={data.work}
                                    onChange={inputevent}
                                    name="work"
                                    placeholder="work" />
                            </div>
                        </div>


                        <div className="">

                            <div className="mb-3 " >
                                <label for="formGroupExampleInput" className="form-label">work</label>
                                <input type="text"
                                    className=" text form-control inputeffect"
                                    value={data.email}
                                    onChange={inputevent}
                                    name="email"
                                    placeholder="email" />
                            </div>
                            <div className="">

                                <div className="mb-3 " >
                                    <label>phone</label>
                                    <input type="text"
                                        className=" text form-control inputeffect"
                                        onChange={inputevent}
                                        value={data.phone}
                                        name="phone"
                                        placeholder="phone" />
                                </div>
                            </div>j
                            </div>
                        <div className="">

                            <div className="mb-3 " >
                                <label for="formGroupExampleInput" className="form-label">password</label>
                                <input type="text"
                                    className=" text form-control inputeffect"
                                    onChange={inputevent}
                                    value={data.password}
                                    name="password"
                                    placeholder="password" />
                            </div>
                            <div className="mb-3 " >
                                <label for="formGroupExampleInput" className="form-label">confirmpassword</label>
                                <input type="text"
                                    className=" text form-control inputeffect"
                                    onChange={inputevent}
                                    value={data.confirmpassword}
                                    name="confirmpassword"
                                    placeholder="confirmpassword" />
                            </div>
                        </div>

                        <div className="submit">


                            <Button className="buttons" onClick={postdata}>Register</Button>


                        </div>

                    </form>
                </div>


    






            </div>

        </>
    )
}
export default Home;