import { random } from 'maath';
import React, { useEffect, useState } from 'react';
import { randFloat, randInt } from 'three/src/math/MathUtils.js';

export const Bannertop = () => {
  const [rotatee, setRotatee] = useState(0);

useEffect(()=>{
  const interval = setInterval(() => {
    setRotatee(prerot=>{
      const newrotate=prerot+ 1 % 360;;
      console.log((randFloat(10,20).toString().slice(0,6)))
      return newrotate;
    })
  }, [1000]);

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
        <div
          className='raindrop'
          style={{
            backgroundColor: 'pink',
            height: '50px',
            width: '20px',
            position: 'absolute',
            left: '10px',
          }}
        ></div>
      </div>
        
    </div>
  );
};
