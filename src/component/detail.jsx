import React from 'react'
import "../index.css"
//import Button from '@material-ui/icons/Button';
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
const Detail = () => {

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
                                   
                                    type="text" />
                            </div>
                            <div className="col-2 dis2">
                                <label><LockIcon /></label>
                                <input className="inputeffect"
                                    name="password"
                                   
                                    type="number" />
                            </div>

                            <div className="col-2 offset-3 ">
                                <Button className="buttons" >signin</Button>

                            </div>


                
                    </div>
                </div>

                <div className="container-fluid borderc">
                    <h1 className="text">Welcome</h1>
                    <p>pls login</p>

                </div>

            </div>
        </>
    )
}
export default Detail