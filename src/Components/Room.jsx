import React, { useEffect, useState } from 'react'

export const Room = () => {
  const [animals,setanimals]=useState(()=>(
    {
      name:"person1",
      image:"src\image\person1.jpg",
      description:"person 1 image and name"
    },  {
      name:"person2",
      image:"src\image\person2.jpg",
      description:"person 2 image and name"
    }
  ))
  return (
    <div>
      {animals.map((animals,index)=>{

<div className='card' key={index} style={{width:"1000px",height:"1500px",backgroundColor:"black", display:"flex",alignItems:"center",flexDirection:"column",overflow:"hidden",boxSizing:""}}>
<img src={animals.image} style={{height:"50%",width:"90%",}}/>
<h1 style={{color:"white",bottom:"100%",fontSize:"120px",marginTop:"0px",marginBottom:"10px",color:"yellow"}}>{animals.name}</h1>
<p style={{color:"red",fontSize:"90px",marginTop:"0",textAlign:"center",wordWrap:"break-word",width:"90%",height:"40%"}}>{animals.description}</p>

</div>
      })}
        <div>
          <div style={{}}> 
          
          </div>
        </div>
    </div>
  )
}
