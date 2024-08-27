import React, { useState } from 'react';

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
    }
  ]);

  const addto = () => {
    const newAnimal = {
      name: "eeeeeee",
      image: "src/image/person2.jpg",
      description: "eeeeeeeeeeeeee"
    };
    setAnimals([...zft, newAnimal]); // This properly adds a new item to the array
    console.log(zft);
  };

  return (
    <div style={{ paddingTop: "10vh", display: "flex", flexWrap: "wrap", gap: "20px", width: "100%", justifyContent: "center" }}>
      {zft.map((zfitat, index) => (
        <div className="card" key={index} style={{ width: "200px", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <img src={zfitat.image} alt={zfitat.description} style={{ width: "100%", borderRadius: "8px" }} />
          <h2>{zfitat.name}</h2>
          <p>{zfitat.description}</p>
          <button onClick={addto}>Add New Card</button>
        </div>
      ))}
    </div>
  );
}
