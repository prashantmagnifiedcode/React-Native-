const initial=false;
const changewhatsapp=(state=initial,action)=>{
    switch(action.type){
        case "whatsapp": return  action.payload ;
        
        default: return state;
    }
}
export default changewhatsapp;