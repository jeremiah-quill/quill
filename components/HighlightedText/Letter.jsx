import { useState } from "react";

export default function Letter({
  children,
  fadeOutTime = 5000,
  primaryColor = "white",
  colors = ["blue", "green", "yellow", "red", "orange", "purple", "pink", "indigo"],
}) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const formattedTiming = fadeOutTime + "ms";

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const styles = {
    transitionDuration: isHighlighted ? "0ms" : formattedTiming,
    transitionProperty: "color",
    color: isHighlighted ? getRandomColor(colors) : primaryColor,
  };

  return (
    <span
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
      style={styles}>
      {children}
    </span>
  );
}
