// src/components/WordOption.jsx
import React from "react";

const WordOption = ({ word, onSelect, selected }) => {
  return (
    <button
      onClick={() => onSelect(word)}
      className={`px-4 py-2 border rounded-lg ${selected ? "bg-blue-500 text-white" : "bg-white text-black"}`}
    >
      {word}
    </button>
  );
};

export default WordOption;
