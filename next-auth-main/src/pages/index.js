import Blogdata from "@/components/blog/Blogdata";
import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";



export default function (){




    
const [blogs, setblogs] = useState();
    async function getblogs() {
        

    
        let response = await fetch("/api/blogs/blogs") ;
        setblogs(await response.json())}
    
    useEffect(()=> {
        getblogs()
    },[])

    return(
        <>
          <Navbar/>
          <Blogdata blog={blogs}/> 
        
        </>
    )
}