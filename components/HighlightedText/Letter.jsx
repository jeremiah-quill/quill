import { useState } from "react";

const defaultColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-red-500",
  "text-orange-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
];

export default function Letter({ children, fadeOutTime }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const formattedTiming = fadeOutTime + "ms";

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <span
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
      style={isHighlighted ? {} : { transitionDuration: formattedTiming }}
      className={`${
        isHighlighted ? `${getRandomColor(defaultColors)}` : `text-black ease-in-out`
      }`}>
      {children}
    </span>
  );
}
