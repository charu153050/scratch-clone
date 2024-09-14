import React, { useRef } from "react";
 
const BallSprite = ({ position, rotation, setPosition }) => {
  const svgRef = useRef(null);
 
  const handleMouseDown = (e) => {
    const target = svgRef.current;
    if (!target) return;
 
    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = position.x;
    const initialY = position.y;
 
    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setPosition({ x: initialX + dx, y: initialY + dy });
    };
 
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
 
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <div>
      <svg
        ref={svgRef}
        fill="#000000"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        transform={`translate(${position.x}, ${position.y}) rotate(${rotation})`}
        onMouseDown={handleMouseDown}
        style={{ cursor: "pointer", position: "absolute" }}
      >
        <path d="M12,0A11.916,11.916,0,0,0,6,1.621a.976.976,0,0,0-.131.08A11.975,11.975,0,1,0,12,0Zm9.022,16.285A16.256,16.256,0,0,1,9.8,15.69a9.961,9.961,0,0,1,2.369-2.55,11.972,11.972,0,0,0,4.448.873,12.071,12.071,0,0,0,5.348-1.25A9.906,9.906,0,0,1,21.022,16.285Zm.853-5.782a9.988,9.988,0,0,1-2.938,1.231A18.2,18.2,0,0,0,15.868,2.78,10.017,10.017,0,0,1,21.875,10.5ZM12.749,2.038a16.227,16.227,0,0,1,4.2,9.949,9.969,9.969,0,0,1-4-.69A12.031,12.031,0,0,0,8.5,2.646,9.922,9.922,0,0,1,12,2C12.253,2,12.5,2.019,12.749,2.038ZM6.487,3.665A10.018,10.018,0,0,1,8.942,5.931a18.253,18.253,0,0,0-6.708,8.2A9.957,9.957,0,0,1,6.487,3.665ZM3.356,17.005A16.261,16.261,0,0,1,9.976,7.65a9.954,9.954,0,0,1,.993,3.891,12.033,12.033,0,0,0-4.715,8.63A10.057,10.057,0,0,1,3.356,17.005ZM12,22a9.948,9.948,0,0,1-3.772-.744A9.983,9.983,0,0,1,8.9,17.481,17.9,17.9,0,0,0,19.375,18.73,9.963,9.963,0,0,1,12,22Z" />
      </svg>
    </div>
  );
};
 
export default BallSprite;