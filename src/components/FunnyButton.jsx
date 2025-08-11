import React from "react";

const FunnyButton = () => {
  return <button onMouseEnter={onMouseOver}>FunnyButton</button>;
};

function onMouseOver(event) {
  const button = event.target;
  button.style.position = "absolute";
  button.style.left = Math.random() * 90 + "vw";
  button.style.top = Math.random() * 90 + "vh";
}
export default FunnyButton;
