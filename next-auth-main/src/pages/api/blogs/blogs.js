import { getblogsAll, saveblogs } from "@/service/blogs";


export default function handler(req, res) {
  if(req.method === "GET"){
  const products = getblogsAll();
   return res.status(200).json(products);
}else if(req.method ==="POST"){
  console.log(req.body);
  const{place, blogs, first,last, email} = req.body
  console.log(place,blogs)
  saveblogs(place,blogs,first,last,email)
  return res.status(201).send();
  
}
return res.status(404).send();
}