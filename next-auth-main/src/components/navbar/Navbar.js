
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";




export default function Navbar({data}){
        
  


    const { status } = useSession();

    let bool ;
    if(status === "authenticated"){
        bool = true;
    }else{
        bool = false

       



    

let greet;
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      greet = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greet="Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      greet= "Good Evening";
    } else {
      greet= "Good Night";
    }
   
       const router = useRouter();
       console.log(router.pathname)
       let logo;
    if(router.pathname === " /auth/signup "){
      logo = "sign up"
    }
console.log(logo)
    return(
        <>
          <nav className=" nav flex bg-black text-white">
             <div className="" >
                Personal Blogs
             </div>



            <div  >      

                <span className={`mx-2 ${bool || "hidden"}`} onClick={signOut}> log out</span>
                <Link className="mx-2" href={ "/auth/login"}>login</Link>
                <Link className="mx-2" href={ "/auth/signup"}> sinup</Link>
            
                <Link className={`mx-2 ${bool || "hidden"}`} href={ "/profile"}>Profile</Link>
       </div>
          </nav>
         <div className=" h-16 bg-white text-4xl">
          {greet}
         </div>
        </>
    )
}

}