import { useState } from "react";

function Test() {
  const [answer, setAnswer] = useState("");

  const questions = [
    {
      question: "1. What is React?",
      answer: "React is a JavaScript library used to build user interfaces and it is used for making single page interfaces effectively."
    },
    {
      question: "2. What is JSX?",
      answer: "JSX is a syntax which is used to write HTML code inside JavaScript."
 