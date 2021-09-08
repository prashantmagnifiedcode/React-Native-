import React, { useState, useEffect } from 'react'
import Slideshow from './slideshow'
import "../index.css"
const Home1 = () => {
    const [states, setstates] = useState({})
    const welcomewise = async () => {
        try {
            const res = await fetch("/welcomewise", {

            })


        } catch (e) { console.log(e) }

    }
    useEffect(() => {
        welcomewise()
    }, [])

    return (
        <>

            
            <Slideshow/>
            
            
            

           
            

 
            

        </>
    )
}
export default Home1;

                //container-fluid homecontainer
               /// <div className="container-fluid homecontainer  ">
                ///    <div>
                 //       <h1>Most Welcome</h1>
                 ///       <h2>BY Prashant srivastava</h2>

//                    </div>

  //              </div>
