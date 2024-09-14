import React, { useState,useRef } from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  // let intervalId;
  const [activeCard, setActiveCard] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const intervalIdRef = useRef(null);

  const moveRight = (steps) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      x: prevPosition.x + steps,
    }));
  };

  const handleRotate = (angle) => {
    setRotation((prevRotation) => prevRotation + angle); // Rotate by 15 degrees
  };
  const stopFunction = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      console.log('Interval stopped');
    }
  };


  const resetPage = () => {
    stopFunction();
    setPosition({ x: 0, y: 0 });
    setRotation(0);
  };
 
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar setActiveCard={setActiveCard} />{" "}
          <MidArea
            activeCard={activeCard}
            moveRight={moveRight}
            handleRotate={handleRotate}
            resetPage={resetPage}
            intervalIdRef={intervalIdRef}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            position={position}
            setPosition={setPosition}
            rotation={rotation}
          />
        </div>
      </div>
    </div>
  );
}
