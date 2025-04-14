import React, { useState } from "react";

const Blank = ({ onSelectWord, wordSelected }) => {
  const [selectedWord, setSelectedWord] = useState("");

  const handleSelectWord = (word) => {
    setSelectedWord(word);
    onSelectWord(word);
  };

  return (
    <div className="inline-block px-4 py-2 border-2 border-dashed rounded-lg min-w-[100px]">
      {selectedWord ? (
        <span className="text-xl font-bold">{selectedWord}</span>
      ) : (
        <span className="text-gray-500">_____</span>
      )}
    </div>
  );
};

export default Blank;
