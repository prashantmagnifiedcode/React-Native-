
export const initialstate=false

export const reducers = (state,action)=>{
    switch(action.type){
        case "change":return action.payload
        
        
        default:return state;
    
    }
    
    
}
export const cookie=true;
export const cookiereducer=(state,action)=>{

}