import React, { useState } from "react";
import DropArea from "./DropArea";
import Icon from "./Icon";
 
export default function MidArea({
  activeCard,
  moveRight,
  handleRotate,
  resetPage,
  intervalIdRef,
  page,
}) {
  const [cardIds, setCardIds] = useState([]);
  const [ballCardIds, setBallCardIds] = useState([]);
  const onDrop = (position) => {
    // console.log(`${activeCard} at position ${position}`);
    if (activeCard === null || activeCard === undefined) return;
 
    if (page === "cat") {
      const newCardsId = [...cardIds];
      newCardsId.splice(position, 0, activeCard);
      setCardIds(newCardsId);
    } else if (page === "ball") {
      const newCardsId = [...ballCardIds];
      newCardsId.splice(position, 0, activeCard);
      setBallCardIds(newCardsId);
    }
  };
 
  const moveRight10Steps = () => moveRight(10);
  const rotateRightWith15Degree = () => handleRotate(15);
  const rotateLeftWith15Degree = () => handleRotate(-15);
 
  const runAllFunction = () => {
    cardIds.forEach((id) => {
      if (id == 2) {
        moveRight10Steps();
      }
      if (id == 3) {
        rotateLeftWith15Degree();
      }
      if (id == 4) {
        rotateRightWith15Degree();
      }
    });
  };
 
  const runAllFunction2 = () => {
    intervalIdRef.current = setInterval(() => {
      cardIds.forEach((id) => {
        if (id == 2) {
          moveRight10Steps();
        }
        if (id == 3) {
          rotateLeftWith15Degree();
        }
        if (id == 4) {
          rotateRightWith15Degree();
        }
      });
    }, 1000); // Adjust the interval time (in milliseconds) as needed
  };
 
  const renderCard = (cardId, moveRight) => {
    switch (cardId) {
      case "0":
        return (
          <div
            className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={runAllFunction}
          >
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
            onClick={moveRight10Steps}
          >
            {"Move 10 steps"}
          </div>
        );
      case "3":
        return (
          <div
            className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={rotateLeftWith15Degree}
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
            onClick={rotateRightWith15Degree}
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
    <div className="h-full overflow-auto relative min-h-screen ml-16">
      <DropArea onDrop={() => onDrop(0)} />
      {page === "cat" &&
        cardIds.map((cardId, index) => {
          return (
            <div key={index}>
              {renderCard(cardId, moveRight, handleRotate)}
              <DropArea onDrop={() => onDrop(index + 1)} />
            </div>
          );
        })}
      {page === "ball" &&
        ballCardIds.map((cardId, index) => {
          return (
            <div key={index}>
              {renderCard(cardId, moveRight, handleRotate)}
              <DropArea onDrop={() => onDrop(index + 1)} />
            </div>
          );
        })}
      <div className="inline-flex rounded-md shadow-sm ">
        <button
          className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded py-1 px-2 text-xs mx-1 "
          onClick={runAllFunction}
        >
          Play
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded py-1 px-2 text-xs mx-1"
          onClick={resetPage}
        >
          Reset
        </button>
        <button
          className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded py-1 px-2 text-xs mx-1"
          onClick={runAllFunction2}
        >
          Repeat
        </button>
      </div>
    </div>
  );
}
 