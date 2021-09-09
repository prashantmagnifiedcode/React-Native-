export const reducer=(state,action)=>{
    if(action.type==="remove"){
        return {...state,products:state.products.filter((currentelement)=>{return currentelement.id!==action.payload})
    }
    }
    if(action.type==="clearcart"){
        return{...state,products:[]}
    }
    
    if(action.type==="d"){
        const update= state.products.map((e)=>{
            if(e.id===action.payload){
                console.log(e.amount)
                return{...state,amount:e.amount-1};
            }
            return e
        })
        console.log(update);
        return {...state,products:update};
    
    }
    
    if(action.type==="i"){
        const update= state.products.map((e)=>{
            if(e.id===action.payload){
                console.log(e.amount)
                return{...state,amount:e.amount+1};
            }
            return e
        })
        console.log(update);
        return {...state,products:update}
    
    }
    if(action.type==="gettotal"){
        let {amount,price}=state.products.reduce(
            (accume,currentval)=>{
                let {amount,price}=currentval
                let updateprice= amount*price;
                accume.price+=updateprice
                accume.amount+=amount;
                return accume;
            },
            {amount:0,
                price:0
            }
        )
        return{...state,amount,price }
    }
    return state;
}