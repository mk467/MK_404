const dummyData = [
  {
    name: "dummy1",
    image: "src/image/dummy1.jpg",
    description: "dummy 1 image and name"
  },
  {
    name: "dummy2",
    image: "src/image/dummy2.jpg",
    description: "dummy 2 image and name"
  },
  {
    name: "dummy2",
    image: "src/image/dummy2.jpg",
    description: "dummy 2 image and name"
  },
  {
    name: "dummy2",
    image: "src/image/dummy2.jpg",
    description: "dummy 2 image and name"
  },
  {
    name: "dummy2",
    image: "src/image/dummy2.jpg",
    description: "dummy 2 image and name"
  }
  // Add more dummy data as needed
];

let valua = 1;

const vvalu = setInterval(() => {
  valua++;
  console.log(valua);
}, 1000);

export default dummyData; 
