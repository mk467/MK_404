import React, { useState } from 'react';

export const Room = () => {
  const [animals, setAnimals] = useState([
    {
      name: "person1",
      image: "src/image/person1.jpg",
      description: "person 1 image and name"
    },
    {
      name: "person2",
      image: "src/image/person2.jpg",
      description: "person 2 image and name"
    }
  ]);

  return (
    <div>
      {animals.map((animal, index) => (
        <div key={index}>
          <h2>{animal.name}</h2>
          <img src={animal.image} alt={animal.description} />
          <p>{animal.description}</p>
        </div>
      ))}
    </div>
  );
}
