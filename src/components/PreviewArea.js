import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({
  position,
  rotation,
  setPosition,
  resetPage,
}) {
  return (
    <div className="flex-none h-full p-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={resetPage}
      >
        Reset Button
      </button>
      <CatSprite
        position={position}
        rotation={rotation}
        setPosition={setPosition}
      />
    </div>
  );
}
