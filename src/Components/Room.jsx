import React, { useState,useEffect } from 'react';
import dummy from "./dummy.js"

export const Room = () => {

  
  const [zft, setAnimals] = useState([
    {
      name: "person1",
      image: "src/image/person1.jpg",
      description: "person 1 image and name"
    },
    {
      name: "person2",
      image: "src/image/person2.jpg",
      description: "person 2 image and name"
    },
    {
      name: "person3",
      image: "src/image/person3.jpg",
      description: "person 3 image and name"
    },
    {
      name: "person4",
      image: "src/image/person4.jpg",
      description: "person 4 image and name"
    },
    {
      name: "person5",
      image: "src/image/person5.jpg",
      description: "person 5 image and name"
    },
    {
      name: "person6",
      image: "src/image/person6.jpg",
      description: "person 6 image and name"
    },
    {
      name: "person6",
      image: "src/image/person6.jpg",
      description: "person 6 image and name"
    },
    {
      name: "person6",
      image: "src/image/person6.jpg",
      description: "person 6 image and name"
    },
    {
      name: "person6",
      image: "src/image/person6.jpg",
      description: "person 6 image and name"
    }
  ]);

  const [dummy,setdummy]=useState(dummy)

  const addto = () => {
    const newAnimal = {
      name: "eeeeeee",
      image: "src/image/person2.jpg",
      description: "eeeeeeeeeeeeee"
    };
    setAnimals([...zft, newAnimal]);
    console.log(zft);
  };

  return (
    <div>
    <div style={{ paddingTop: "10vh", display: "flex", flexWrap: "wrap",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(251, 246, 253)"}}>
      {zft.map((zfitat, index) => (
        
        <div className="card" key={index} style={{ width: "200px",height:"400px", display: "flex", flexDirection: "column",alignItems:"center",justifyContent:"center",padding:"20px",margin:"5px",backgroundColor:"#FFFFFF",borderRadius:"10px",borderColor:"rgb(4, 4, 4)"}}>
          <img src={zfitat.image} alt={zfitat.description} style={{ width: "100%", borderRadius: "18px" }} />
          <h2>{zfitat.name}</h2>
          <p>{zfitat.description}</p>
          <button onClick={addto}>Add New Card</button>
        </div>
      ))}
      <div>eeee</div>
    </div>
 </div>
  );
}
