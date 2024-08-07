import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiSearchLine } from "react-icons/ri";


export const NavBar = () => {
    const move=useEffect(()=>{
        console.log("eeeeeeeeeeeeeeeeeee");
    },[])
    const go=useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"space-between",height:"8vh",width:"100%",position:"fixed",zIndex:"3"}}>
        <div style={{fontSize:"40px",margin:"auto 20px",color:"white"}}>LOGO</div>
        <div style={{margin:"auto 0px",display:"flex"}}>
            <div onClick={
                ()=>{
                    go("/");console.log("eeee");
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px"}}>HOME</div>
            <div onClick={
                ()=>{
                   // go("/")
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px"}}>test1</div>
            <div onClick={
                ()=>{
                    go("/")
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px"}}>test2</div>
            <div onClick={
                ()=>{
                    go("/")
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px"}}>test3</div>
            <div onClick={
                ()=>{
                    go("/")
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px"}}>test4</div>
                        <div style={{margin:"auto 20px"}}><RiSearchLine style={{fontSize:"40px",color:"white"}}/></div>

            <div onClick={
                ()=>{
                    go("/")
                }} 
                style={{cursor:"pointer",textDecoration:"none",padding:"10px",color:"white",textAlign:"center",width:"70px",position:"absolute",right:"10px",boxShadow:"0 0 18px 1px rgba(222,222,222,.5)",borderRadius:"5px"}}>LOGIN</div>
        </div>
        <div style={{margin:"auto 20px"}}></div>
    </div>
  )
}
