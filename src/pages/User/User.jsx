import { useParams } from "react-router-dom"

export const User = () =>{
    const {id} = useParams(); 
    return <>

        <div className="text-black font-bold text-3xl text-center m-8 ">User: {id}</div>
    </>
}