export const Increment=()=>{
    return {type:"inc"}
}
export const Decrement=()=>{
    return {type:"dec"}
}
export const multi=()=>{
    return {type:"m"}
}
export const div=()=>{
    return {type:"d"}
}
export const addtodo=(data)=>{
    return{
        type:"add_todo",
        payload:{
        id:new Date().getTime().toString(),
        data:data
        }
    }
}
export const deletetodo=(id)=>{
    return{
        type:"delete_todo",
        id
    }
}
export const removetodo=()=>{
    return{
        type:"remove_todo"
    }
}