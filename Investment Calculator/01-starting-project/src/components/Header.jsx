import React from "react";
import reactImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <h1>Investment Calculator</h1>
      <img src={reactImg} alt="Logo showing a money bag" />
    </header>
  );
}
