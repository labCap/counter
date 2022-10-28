import React from "react";
import "./Button.css";

export const Button = ({ text, func }) => {
  return (
    <div className="button" onClick={func}>
      <span>{text}</span>
    </div>
  );
};
