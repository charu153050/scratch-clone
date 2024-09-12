import React from "react";
import Icon from "./Icon";

export default function Sidebar({ setActiveCard }) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div
        draggable
        onDragStart={() => setActiveCard("0")}
        onDragEnd={() => setActiveCard(null)}
        className="flex flex-row flex-wrap cursor-grabbing bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        draggable
        onDragStart={() => setActiveCard("1")}
        onDragEnd={() => setActiveCard(null)}
        className="flex flex-row flex-wrap cursor-grabbing bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        draggable
        onDragStart={() => setActiveCard("2")}
        onDragEnd={() => setActiveCard(null)}
        className="flex flex-row flex-wrap cursor-grabbing bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Move 10 steps"}
      </div>
      <div
        draggable
        onDragStart={() => setActiveCard("3")}
        onDragEnd={() => setActiveCard(null)}
        className="flex flex-row flex-wrap cursor-grabbing bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        draggable
        onDragStart={() => setActiveCard("4")}
        onDragEnd={() => setActiveCard(null)}
        className="flex flex-row flex-wrap cursor-grabbing bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
    </div>
  );
}
