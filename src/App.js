import React, { useState } from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [activeCard, setActiveCard] = useState(null);
  // console.log(activeCard);
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar setActiveCard={setActiveCard} /> <MidArea activeCard={activeCard} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea/>
          {/* <p>card active : {activeCard}</p> */}
        </div>
      </div>
    </div>
  );
}
