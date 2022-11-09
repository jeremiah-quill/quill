import Letter from "./Letter";

export default function HighlightedText({ text, classNames, fadeOutTime, primaryColor, colors }) {
  return (
    <div>
      <h1 className={classNames}>
        {text.split("").map((letter, index) => {
          return (
            <Letter
              key={index}
              fadeOutTime={fadeOutTime}
              primaryColor={primaryColor}
              colors={colors}>
              {letter}
            </Letter>
          );
        })}
      </h1>
    </div>
  );
}
