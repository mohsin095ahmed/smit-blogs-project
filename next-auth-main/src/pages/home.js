import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dash from '@/components/dash/Dash'
import { useEffect, useState } from 'react'
import Blogdata from '@/components/blog/Blogdata'
import { getSession } from "next-auth/react";
import { getByEmail } from '@/service/users'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {


const [mount , setmount] = useState(false);
const [blogs, setblogs] = useState();
const [ item, setitem] = useState(0) ;


 

const render = (d)=>{
  console.log(d);
  setitem(item + 1)
 }

     async function getblogs() {
         let response = await fetch("/api/blogs/blogs") ;
         setblogs(await response.json())

     }

   useEffect(()=>{
    setmount(true);
    getblogs()
   },[item])        
 //  console.log(blogs)

//console.log(blogs)

  

  return (
   <>
    <div>
    <Navbar/>
      <div>
      <Dash render={render} data={data}/>
      </div>
       <div>
      <Blogdata blog={blogs} />
       </div>

   

         
    </div>
   </>
  )
};
export async function getServerSideProps({req}){
  const session =  await getSession({req})
  
           
     if(!session){
      return{
        redirect:{
           destination : "/",
           permanent : false,
        }
      }
     }
     const {user}= session;
  const email= user.email;
     const data = getByEmail(email)
   console.log(email)
      console.log(data)

  return{
   props:{
     data,
   }
  }

} 


