


const initialsecondvalue=5
const Changenumbersecond =(state=initialsecondvalue,action)=>{
    switch(action.type){
        
        case "m": return  state *5;
        case "d": return state /5;
        default :return state;
    }
}
export default Changenumbersecond