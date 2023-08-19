

export default function Blogdata({blog}){
    const datal = blog

    return(
        <>
          {datal && datal.map((d)=>(
            <div className="w-9/12 px-5 py-5 bg-orange-100 mt-3">
                <h1 className="font-bold">{d.place}</h1>
                <h1> writer name :{d.first}{d.last}</h1>
                <p>{d.blogs}</p>
            </div>
          ))}   
        
        </>
    )
}