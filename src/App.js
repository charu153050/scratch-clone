import React, { useRef, useState } from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [midPage, setMidPage] = useState("cat");
  const [activeCard, setActiveCard] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 90, y: 90 });
  const [ballRotation, setBallRotation] = useState(0);
  const intervalIdRef = useRef(null);
  const intervalIdRefBall = useRef(null);
  const [cardIds, setCardIds] = useState([]);
  const [ballCardIds, setBallCardIds] = useState([]);

  const moveRight = (steps) => {
    if (midPage === "cat") {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + steps,
      }));
    } else {
      setBallPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + steps,
      }));
    }
  };

  const handleRotate = (angle) => {
    if (midPage === "cat") {
      setRotation((prevRotation) => prevRotation + angle);
    } else {
      setBallRotation((prevRotation) => prevRotation + angle);
    }
  };
  const stopFunction = () => {
    if (intervalIdRef.current || intervalIdRefBall.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
      clearInterval(intervalIdRefBall.current);
      intervalIdRefBall.current = null;
      console.log("Interval stopped");
    }
  };

  const resetPage = () => {
    stopFunction();
    setPosition({ x: 0, y: 0 });
    setRotation(0);
    setBallPosition({ x: 0, y: 0});
    setBallRotation(0);
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
            intervalIdRefBall={intervalIdRefBall}
            page={midPage}
            cardIds={cardIds}
            setCardIds={setCardIds}
            ballCardIds={ballCardIds}
            setBallCardIds={setBallCardIds}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            position={position}
            setPosition={setPosition}
            rotation={rotation}
            midPage={midPage}
            setMidPage={setMidPage}
            ballPosition={ballPosition}
            setBallPosition={setBallPosition}
            ballRotation={ballRotation}
            cardIds={cardIds}
            setCardIds={setCardIds}
            ballCardIds={ballCardIds}
            setBallCardIds={setBallCardIds}
          />
        </div>
      </div>
    </div>
  );
}
