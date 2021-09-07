import React from 'react'

import '../slide.css'

const Message = (pops) => {
    
    if (pops.user) {
        if(!pops.user==null){
            console.log(pops.user)
            return (
          
                <div  className='messages incoming' >
                     <h5>Pls Login ...</h5>
              </div>
            )

        }else{
            
            console.log("in")
        return (
          
            <div  className='messages incoming' >
                  <h6>{pops.user}</h6>
                <p> {`${pops.message}`}</p>
          </div>
        )
    }
    }
    else {

        console.log("out")
        return (
             <div  className='messages outgoing'  >
             <h6>you</h6>
                <p> {`${pops.message}`}{pops.user}</p>
          </div>
        )
    }
}

export default Message
