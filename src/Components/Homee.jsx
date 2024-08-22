import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import 'ldrs/ring'
import { lineSpinner } from 'ldrs'



export const Homee=()=>{
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build.loader.js",
    dataUrl: "Build/Build.data",
      frameworkUrl: "Build/Build.framework.js",
      codeUrl: "Build/Build.wasm",
    });
    const [ishidden,setishidden]=useState(true);
    useEffect(()=>{
      lineSpinner.register()
      setTimeout(() => {
        setishidden(false);
      }, 3000);
    },[])

  return (
  <div>
    <Unity style={{width:"100%",height:"100vh"}} unityProvider={unityProvider} />;
    <div style={{position:"fixed",top:"0",left:"0",width:"100%",height:ishidden?"100%":0,background:"linear-gradient(black 98%,transparent)",transition:"all 1s",display:"flex",justifyContent:"center",alignItems:"center",opacity:ishidden?"1":0}}>


<l-line-spinner
  size="90"
  stroke="3"
  speed="1" 
  color="white" 
></l-line-spinner>
    </div>
  </div> 
  )
}
