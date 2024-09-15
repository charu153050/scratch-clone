import React, { useState } from "react";
import BallSprite from "./BallSprite";
import CatSprite from "./CatSprite";
import HeroFeature from "./HeroFeature";

export default function PreviewArea({
  position,
  rotation,
  setPosition,
  midPage,
  setMidPage,
  ballPosition,
  setBallPosition,
  ballRotation,
  cardIds,
  setCardIds,
  ballCardIds,
  setBallCardIds,
}) {
  const [plusButtonClicked, setPlusButtonClicked] = useState(false);

  return (
    <div className="flex-none w-full h-full p-2 relative">
      <CatSprite
        position={position}
        rotation={rotation}
        setPosition={setPosition}
      />
      {plusButtonClicked && (
        <BallSprite
          position={ballPosition}
          rotation={ballRotation}
          setPosition={setBallPosition}
        />
      )}
      <div className="absolute bottom-10 left-0 right-0 flex justify-between items-center w-full p-4">
        <div className="flex-1 text-start">Sprit Cat</div>
        <div className="flex-1 text-center">X {position.x}</div>
        <div className="flex-1 text-right">Y {position.y}</div>
      </div>
      {plusButtonClicked && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-between items-center w-full p-4">
          <div className="flex-1 text-start">Sprit Ball</div>
          <div className="flex-1 text-center">X {ballPosition.x}</div>
          <div className="flex-1 text-right">Y {ballPosition.y}</div>
        </div>
      )}
      <div className="absolute mt-5 bottom-0 left-0 w-50 h-50 flex space-x-4">
        {/* Card 1 */}
        <div
          className="w-1/2 rounded overflow-hidden shadow-lg bg-white p-2 cursor-pointer"
          onClick={() => setMidPage("cat")}
        >
          <p className="text-gray-700 text-sm hover:bg-blue-200">
            Cat
            {/* <CatSprite
              position={{ x: 0, y: 0 }}
              rotation={0}
              setPosition={() => {}}
            /> */}
          </p>
        </div>
        {/* Card 2 */}
        <div
          className="w-1/2 rounded overflow-hidden shadow-lg bg-white p-2 cursor-pointer hover:bg-blue-200"
          onClick={() => {
            setMidPage("ball");
            setPlusButtonClicked(true);
          }}
        >
          {plusButtonClicked ? (
            <p className="text-gray-700 text-sm flex justify-center">ball</p>
          ) : (
            <p className="text-gray-700 text-sm flex justify-center">➕</p>
          )}
        </div>
      </div>

      <HeroFeature
        position={position}
        ballPosition={ballPosition}
        cardIds={cardIds}
        setCardIds={setCardIds}
        ballCardIds={ballCardIds}
        setBallCardIds={setBallCardIds}
      />
    </div>
  );
}
