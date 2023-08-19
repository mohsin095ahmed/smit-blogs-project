import { useRef } from "react"


export default function Dash({render ,data}){
     const placeRef = useRef();
     const blogsRef = useRef();
         // console.log(data.firstname ,data.lastname)
   const first = data.firstname;
   const last = data.lastname;
   const email = data.email;
   console.log(first, last, email)
     async function post(e){
           const place = placeRef.current.value;
           const blogs = blogsRef.current.value;        
           
           e.preventDefault()
           if(blogs.length > 100){
            let resp = await fetch("api/blogs/blogs",{
                method:"POST",
                body:JSON.stringify({
                    place,blogs,first,last,email
                }),
                headers:{
                    "Content-Type": "application/json"
                }
              });
              
          if(resp.ok === true){


            const jim = document.getElementById("jim");
            const jin = document.getElementById("jin");
           

            jim.value = " ";
            jin.value = " ";
          }
          console.log(resp)
          render("yes")
    
           }else{
            alert("please enter your long para")
           }
          
    }





    return(
        <>
        <div>
            <form onSubmit={post}>
               <input
               className= "  input border-2  border-violet-400 border-solid"
               type="text"
               min="30"
               required
               placeholder="placeholder"
               ref={placeRef}
               id="jim"
               />
             <br></br>
             <textarea className="border-2 border-black resize-none"
              rows="10"
              cols="90"
              required
              ref={blogsRef}
              id="jin"
             >
               

             </textarea><br/>
               <button type="submit" className=" h-10 w-40 bg-purple-600 text-white">Post</button>
            </form>

        </div>
        
        </>
    )
}