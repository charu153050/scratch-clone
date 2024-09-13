import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({position, rotation}) {
  return (
    <div className="flex-none h-full p-2">
      <CatSprite position={position} rotation={rotation} />
    </div>
  );
}
