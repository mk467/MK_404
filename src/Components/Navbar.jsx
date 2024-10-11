import React, { useState } from 'react'
import './Navbar.css'


export const Navbar = () => {
  const [panelheight,setpanelheight]=useState("50")
  return (
    <div>
        <div style={{display:"flex",alignItems:"center",backgroundColor:"darkgreen"}}>
          <div>
            <div style={{width:"20%",height:"100%",margin:"1%"}}  onMouseEnter={()=>{setpanelheight("50")}}>
                <a href="" className='productbutton'>Product</a>
            </div>
          </div>
          <h1 style={{scale:"100%",width:"30%",marginLeft:"10%",marginRight:"10%"}}>
            LOGO
          </h1>
          <div style={{width:"20%"}}>
          </div>
        </div>
        <div className='panel1' style={{height:`${panelheight}vh`}} onMouseLeave={()=>{setpanelheight("0")}}>
          <div></div>
        </div>
    </div>
  )
}
