import { useLoaderData } from "react-router-dom";

export const Github = () =>{
    const data = useLoaderData();
   
    return <>

        <div className="text-3xl font-bold m-6 text-center">Github Followers: {data.followers} </div>
        <div className="flex justify-center">
            <img className="rounded-full h-80 w-80 hover:-translate-y-3 hover:scale-125 duration-300  " src={data.avatar_url} alt="Github profile" />    
        </div>
    </>
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Prateekk02')
    return response.json(); 
}