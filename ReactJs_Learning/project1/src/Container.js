import React, { useState } from "react";

const Container = () => {
  const [color, setColor] = useState("");
  const [hexcode, setHexCode] = useState("");
  const [textColor, setTextColor] = useState("black");

  const getHexCode = (color) => {
    const squareDiv = document.querySelector(".square");
    squareDiv.style.backgroundColor = color;
    const computedStyle = window.getComputedStyle(squareDiv);
    const computedColor = computedStyle.backgroundColor;

    const rgbMatch = computedColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (rgbMatch) {
      const [r, g, b] = rgbMatch.slice(1);
      return (
        "#" +
        [r, g, b].map((x) => parseInt(x).toString(16).padStart(2, "0")).join("")
      );
    }
    return "";
  };

  const handleColorDisplay = (event) => {
    const inputValue = event.target.value.trim();
    setColor(inputValue);
    const hexValue = getHexCode(inputValue);
    setHexCode(hexValue);
  };

  const handleTextColorChange = (event) => {
    event.preventDefault();
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  }

  return (
    <main>
      {color.length ? (
        <div class="square" style={{ backgroundColor: color, color: textColor }}>
          <p>
            {color} <br /> {hexcode}
          </p>
        </div>
      ) : (
        <div class="square">
          <p>Empty Color</p>
        </div>
      )}
      <form>
        <label htmlFor="colorBox">Display Color</label>
        <input
          autoFocus
          id="color"
          type="text"
          placeholder="Add color name"
          value={color}
          onChange={handleColorDisplay}
        />
        <br />
        <button type="submit" aria-label="Toggle Color" onClick={handleTextColorChange}>
          Toggle Text Color
        </button>
      </form>
    </main>
  );
};

export default Container;
