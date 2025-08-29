// components/Hider.js
import { useState } from "react";

export default function Hider() {
  const [text, setText] = useState("");
  const [hiddenText, setHiddenText] = useState(localStorage.getItem("hiddenText") || "");
  const [isHidden, setIsHidden] = useState(false);

  const handleHide = () => {
    localStorage.setItem("hiddenText", text);
    setHiddenText(text);
    setText("");
    setIsHidden(true);
  };

  const handleUnhide = () => {
    setIsHidden(false);
  };

  return (
    <div className="p-4 border mt-3">
      <textarea
        placeholder="Enter text to hide"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full"
      />
      <div className="mt-2">
        <button onClick={handleHide} className="bg-green-500 text-white px-3 py-1 mr-2">
          Hide
        </button>
        <button onClick={handleUnhide} className="bg-orange-500 text-white px-3 py-1">
          Unhide
        </button>
      </div>

      {!isHidden && hiddenText && (
        <div className="hidden-box">
        <p className="mt-3 p-2 border bg-gray-100">Hidden Text: {hiddenText}</p>
        </div>
      )}
    </div>
  );
}
