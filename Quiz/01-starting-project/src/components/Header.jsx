import React from "react";
import ReactImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={ReactImg} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
