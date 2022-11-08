import Letter from "./Letter";

export default function HighlightedText({ text, classNames, fadeOutTime }) {
  return (
    <div>
      <h1 className={classNames}>
        {text.split("").map((letter, index) => {
          return (
            <Letter key={index} fadeOutTime={fadeOutTime}>
              {letter}
            </Letter>
          );
        })}
      </h1>
    </div>
  );
}
