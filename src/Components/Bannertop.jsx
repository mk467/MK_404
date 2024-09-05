import { random } from 'maath';
import React, { useEffect, useState } from 'react';
import { randFloat, randInt } from 'three/src/math/MathUtils.js';

export const Bannertop = () => {
  const [rotatee, setRotatee] = useState(0);

useEffect(()=>{
  const interval = setInterval(() => {
    setRotatee(prerot=>{
      const newrotate=prerot+1;

      //1==2?console.log(true):console.log(false)
      return newrotate;
    })
  }, [100]);

  return () => clearInterval(interval);

},[])

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
      <div>
        <img
          src="src/image/animedance.gif"
          alt="Animation Dance"
          style={{
            width: '100%',
            height: '100%',
            transition: 'transform 1s linear'
          }}
        />
        
        
      </div>
      <div>
        <div style={{height:"80px",width:"100%",position:"absolute",backgroundColor:"blue"}}>
          <p style={{position:"absolute",backgroundColor:"red",height:"100px"}}>ANIMATED TEXT</p>
        </div>
      </div>
        
    </div>
  );
};
