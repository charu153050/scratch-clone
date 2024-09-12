import React, { useState } from "react";
import DropArea from "./DropArea";

export default function MidArea({ activeCard }) {
  const [items, setItems] = useState([]);
  const onDrop = (position) => {
    console.log(`${activeCard} at position ${position}`);
    if(activeCard === null || activeCard === undefined) return;

    const newItems = items.splice(position, 0, )
  };
  return (
    <div className="flex-1 h-full overflow-auto">
      <DropArea onDrop={() => onDrop(0)} />
      {items.map((item, index) => {
        return (
          <div>
            <p>Hello</p>
            <DropArea onDrop={() => onDrop(index + 1)} />
          </div>
        );
      })}
    </div>
  );
}
