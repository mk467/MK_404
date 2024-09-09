import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
  const [user,setuser]=useState("")
  const [pass,setpass]=useState("")
  const loginpost =()=>{
    axios.post("http://localhost:90/login")
  }
  const [animateImage,setanimateImage]=useState(false);
    const imageUser="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1725837891~exp=1725841491~hmac=c9fe54af7d75a9157f21e68a9db87a0a426caa4f7c046de19c2062f8173337fa&w=826"
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"5%"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#090C9B",height:"600px",width:"800px",margin:"100px",borderRadius:"20px",boxShadow:""}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100px",width:"100px",overflow:"hidden",borderRadius:"100%"}} >
                <img src={imageUser} style={{backgroundColor:"white",height:"100px",width:"100px",objectFit:"cover",scale:`${animateImage?1.4:1}`,transition:"all .3s"}} onMouseEnter={()=>{setanimateImage(true);console.log("works")}} onMouseLeave={()=>{setanimateImage(false)}}/>
                </div>
                <div style={{paddingTop:"100px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <input type="text" style={{padding:"5px 10px",margin:"5px",width:"400px"}} onChange={(e)=>{setuser(e.target.value)}} placeholder='User'/>
                    <input type="password"  style={{padding:"5px 10px",margin:"5px",width:"400px"}} onChange={(e)=>{setpass(e.target.value)}} placeholder='Password'/>
                    <button onClick={loginpost}>
                      Login</button>
                </div>           
               
        </div>
    </div>


  )
}
