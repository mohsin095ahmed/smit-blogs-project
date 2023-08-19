import { getSession } from "next-auth/react"
import { getByEmail } from "@/service/users";
import { useRef, useState } from "react";
import Image from "next/image";
import { Upload } from "@/service/upload";
import Navbar from "@/components/navbar/Navbar";

export default function SignUp ({data}) {
    const [ image, setimage]= useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh0oAYiVm2rVZj2IP4fDAqwxVoUUT53t5Ms1GohIg&s")

  console.log(data)
  const first = data.firstname;
  const last = data.lastname;


  const imageRef = useRef()
  async function add(){

    let file = imageRef.current.files;
    console.log(file)
    try{
      const res =await Upload(file);
      console.log(res);
      setimage(res);
       
    }catch(err){
      console.log(err)
    }
}
    return (
      
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Navbar/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {first}{last}
          </h2>

          
            <input ref={imageRef}  type="file" id="my-img"></input><br></br><br></br>
            
               <button  onClick={add}>image upload</button>
               <br/><br/>
               
               <img src={image}
                width={150}
                height={270}
              
               />
        </div>
        </div>
    )
};
 export async function getServerSideProps({req}){
      const session =  await getSession({req});
      
     if(!session){
      return{
        redirect:{
           destination : "/auth/login",
           permanent : false,
        }
      }
     }
     const {user}= session;
     const email= user.email;
        const data = getByEmail(email)
      return{
        props:{
          data,
        }
      }
 }