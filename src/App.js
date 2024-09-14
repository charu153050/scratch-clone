import React, { useState,useRef } from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [activeCard, setActiveCard] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const moveRight = (steps) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      x: prevPosition.x + steps,
    }));
  };

  const handleRotate = (angle) => {
    setRotation((prevRotation) => prevRotation + angle); // Rotate by 15 degrees
  };

  const resetPage=()=>{
    setPosition({ x: 0, y: 0 })
    setRotation(0);

  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar setActiveCard={setActiveCard} />{" "}
          <MidArea activeCard={activeCard} moveRight={moveRight} handleRotate={handleRotate} resetPage={resetPage} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea position={position}  setPosition={setPosition} rotation={rotation}  />
        </div>
      </div>
    </div>
  );
}
