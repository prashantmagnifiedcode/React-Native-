const initialstate=true;
const changecookies=(state=initialstate,action)=>{
    switch(action.type){
        case "cookies": return  action.payload ;
        
        default: return state;
    }
}
export default changecookies;

