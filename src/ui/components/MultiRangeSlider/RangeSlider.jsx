import MultiRangeSlider from "multi-range-slider-react";
import { useState } from "react";
import "../MultiRangeSlider/RangeSlider.scss";
import { formatCurrency } from "../../../lib/utils";
import Heading from "../Heading/Heading";

export default function RangeSlider() {
  const [minValue, set_minValue] = useState(10);
  const [maxValue, set_maxValue] = useState(50);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="range-box">
      <Heading as="h3">Filter by price</Heading>
      <MultiRangeSlider
        min={10}
        max={50}
        ruler={false}
        label={false}
        labels={false}
        minValue={minValue}
        maxValue={maxValue}
        baseClassName=""
        thumbLeftColor="#8bc34a"
        thumbRightColor="#8bc34a"
        onInput={(e) => {
          handleInput(e);
        }}
      />

      <div className="range-inputs">
        <input
          type="text"
          value={formatCurrency(minValue).slice(0, 3)}
          inputMode="numeric"
        />
        <input
          type="text"
          value={formatCurrency(maxValue).slice(0, 3)}
          inputMode="numeric"
        />
      </div>
    </div>
  );
}
