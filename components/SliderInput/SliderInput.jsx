import React from "react";

export function SliderInput({
  value = 250,
  setValue = () => {},
  onChange = () => {},
  min = 50,
  max = 500,
  step = 50,
  lowerColor = "black",
  upperColor = "lightgray",
  thumbColor = "black",
  tooltipColor = "black",
  thumbSize = { width: "35", height: "35" },
}) {
  // const styles = {
  //   transitionDuration: isHighlighted ? "0ms" : formattedTiming,
  //   transitionProperty: "color",
  //   color: isHighlighted ? getRandomColor(colors) : primaryColor,
  // };

  function handleChange(e) {
    // handle onChange passed in as prop
    onChange(e.target.value);
    setValue(e.target.value);

    // handle progress color on left side of the range

    // handle updating value and position of sliderValue
    // const newValue = Number(((slider.value - slider.min) * 100) / (slider.max - slider.min));
    // const newPosition = 12 - newValue * 0.35;
    // sliderValue.innerHTML = `<span>${slider.value} units</span>`;
    // sliderValue.style.left = `calc(${newValue}% + (${newPosition}px))`;

    // handle updating estimated earnings
    // estimatedEarnings.innerHTML = `$${(slider.value / 50) * 29.5 * 12}`;
  }

  const percentage = (value - min) / (max - min);

  // handle updating value and position of sliderValue
  const newValue = Number(((value - min) * 100) / (max - min));
  const newPosition = 17.5 - newValue * 0.35;
  // sliderValue.innerHTML = `<span>${slider.value} units</span>`;
  // sliderValue.style.left = `calc(${newValue}% + (${newPosition}px))`;

  return (
    <div className="custom-slider-container">
      <div
        style={{ left: `calc(${newValue}% + (${newPosition}px))` }}
        className="custom-slider-value">
        <span style={{ backgroundColor: tooltipColor }}>{value}</span>
      </div>
      <div style={{ backgroundColor: upperColor }} className="trackUpperFill"></div>
      <div
        style={{ width: `${percentage * 100}%`, backgroundColor: lowerColor }}
        className="trackLowerFill"></div>
      <input
        style={{
          "::WebkitSliderThumb": {
            borderColor: "red",
            borderWidth: "5px",
          },
        }}
        onChange={(e) => handleChange(e)}
        className="rangeInput"
        id="rangeinput"
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
      />
    </div>
  );
}
