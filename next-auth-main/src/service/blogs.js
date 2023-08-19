import fs from 'fs';
import path  from 'path';


const filePath = path.join(process.cwd(),  "src", "data", "blogs.json" );

export function getblogsAll(){
    const data = fs.readFileSync(filePath);
     return JSON.parse(data);
}

export function saveblogs(place, blogs, first , last, email){
    const data = getblogsAll();
    
    data.push({
        place,blogs,first,last,email,
        id:data.length +1

    });
    fs.writeFileSync(filePath, JSON.stringify(data))

 }