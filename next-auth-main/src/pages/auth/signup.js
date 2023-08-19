import Form from "@/components/auth/form";
import Navbar from "@/components/navbar/Navbar";



export default function SignUp () {
   async function addUser(email,password, firstname ,lastname){
    console.log(email,password);
    try{
      
    let resp = await fetch("/api/auth/user",{
        method:"POST",
        body: JSON.stringify({email,password, firstname ,lastname}),
        headers:{
            "Content-type":"application/json"
        }
    
    });
    if(resp.ok){
        alert("sign up succses")
    }
    }catch(err){
  console.log(err)
    }
}
     
    return(
        <>
        <Navbar/>
        <Form signin={false} click={addUser} />
        </>
    ) 
};
