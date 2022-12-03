import { useState } from "react";
import { SliderInput } from "../../components/SliderInput";

export default function sliderInputPage() {
  const [value, setValue] = useState(250);

  return (
    <div className="bg-white p-16">
      <SliderInput
        value={value}
        setValue={setValue}
        // lowerColor="dodgerblue"
        // upperColor="goldenrod"
        // tooltipColor="goldenrod"
      />
      ;
    </div>
  );
}
