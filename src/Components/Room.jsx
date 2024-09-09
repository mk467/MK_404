import React, { useState, useEffect } from 'react';
import dummyData from './dummy.js';

export const Room = () => {
  const [zft, setAnimals] = useState(dummyData);  // Use dummyData
  const [value, setValue] = useState(valua);  // Set initial value for valua

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Updated value: {value}</h1>  {/* Display the updating value */}
      <div style={{ paddingTop: "10vh", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(251, 246, 253)" }}>
        {zft.map((zfitat, index) => (
          <div className="card" key={index} style={{ width: "200px", height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", margin: "5px", backgroundColor: "#FFFFFF", borderRadius: "10px", borderColor: "rgb(4, 4, 4)" }}>
            <img src={zfitat.image} alt={zfitat.description} style={{ width: "100%", borderRadius: "18px" }} />
            <h2>{zfitat.name}</h2>
            <p>{zfitat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
