import React, { useState } from "react";

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={
        showDrop
          ? "inline h-24 text-gray-400 border border-dashed border-gray-400 rounded-lg p-4 mb-4"
          : "opacity-0"
      }
    >
      DropArea
    </section>
  );
};

export default DropArea;
