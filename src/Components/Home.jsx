// Home.js
import React, { useEffect, useRef } from 'react';
import p5 from 'p5'; // Import p5.js

export const Home = () => {
  const containerRef = useRef(null); // Reference to the div

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400).parent(containerRef.current); // Attach canvas to div
        p.background(0); // Set background to black
      };

      p.draw = () => {
        p.ellipse(p.width / 2, p.height / 2, 100, 100); // Draw a circle at the center
      };
    };

    new p5(sketch); // Create the p5.js sketch

    // Cleanup the sketch when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear canvas
      }
    };
  }, []);

  return <div ref={containerRef}></div>; // div to hold the p5.js canvas
};
