import { useEffect } from 'react';

const useSpiderWebEffect = () => {
  useEffect(() => {
    const spiderWebContainer = document.getElementById('spider-web-container');

    const createSpiderWebCircle = () => {
      if (spiderWebContainer) {
        const circle = document.createElement('div');
        circle.classList.add('spider-web-circle');

        // Set random position for the circle within the container
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;

        // Append the circle to the container
        spiderWebContainer.appendChild(circle);

        // Remove the circle after animation ends to prevent overflow
        setTimeout(() => {
          spiderWebContainer.removeChild(circle);
        }, 3000); // Matches the animation duration
      }
    };

    // Create a circle every 500 milliseconds
    const interval = setInterval(createSpiderWebCircle, 500);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useSpiderWebEffect;
