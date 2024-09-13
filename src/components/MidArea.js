import React, { useState } from "react";
import DropArea from "./DropArea";
import Icon from "./Icon";

export default function MidArea({ activeCard, moveRight, handleRotate }) {
  const [cardIds, setCardIds] = useState([]);
  const onDrop = (position) => {
    // console.log(`${activeCard} at position ${position}`);
    if (activeCard === null || activeCard === undefined) return;

    const newCardsId = [...cardIds];
    newCardsId.splice(position, 0, activeCard);
    setCardIds(newCardsId);
  };

  const renderCard = (cardId, moveRight) => {
    switch (cardId) {
      case "0":
        return (
          <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 text-sm cursor-pointer">
            {"When "}
            <Icon name="flag" size={15} className="text-green-600 mx-2" />
            {"clicked"}
          </div>
        );
      case "1":
        return (
          <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 text-sm cursor-pointer">
            {"When this sprite clicked"}
          </div>
        );
      case "2":
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={() => moveRight(10)}
          >
            {"Move 10 steps"}
          </div>
        );
      case "3":
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={() => handleRotate(-15)}
          >
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </div>
        );
      case "4":
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={() => handleRotate(15)}
          >
            {"Turn "}
            <Icon name="redo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full overflow-auto">
      <DropArea onDrop={() => onDrop(0)} />
      {cardIds.map((cardId, index) => {
        return (
          <div key={index}>
            {renderCard(cardId, moveRight, handleRotate)}
            <DropArea onDrop={() => onDrop(index + 1)} />
          </div>
        );
      })}
    </div>
  );
}
