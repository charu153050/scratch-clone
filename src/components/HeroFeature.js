import React, { useEffect } from "react";

const HeroFeature = ({
  position,
  ballPosition,
  cardIds,
  setCardIds,
  ballCardIds,
  setBallCardIds,
}) => {
  // Function to compare two objects
  const areObjectsEqual = (obj1, obj2) => {
    const xDiff = Math.abs(obj1.x - obj2.x);
    const yDiff = Math.abs(obj1.y - obj2.y);
    console.log("xDiff:", xDiff, "yDiff:", yDiff);
    if (xDiff >= 70 && xDiff <= 80 && yDiff >= 45 && yDiff <= 70) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    console.log("Position:", position);
    console.log("Ball Position:", ballPosition);
    if (areObjectsEqual(position, ballPosition)) {
    //   alert("Hero Feature Activate");
      const ball = ballCardIds
      const cat = cardIds
      setCardIds(ball)
      setBallCardIds(cat)
    }
  }, [position, ballPosition]);

  return <div></div>;
};

export default HeroFeature;
