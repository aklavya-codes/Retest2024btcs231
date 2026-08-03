import { useState } from "react";

function Test() {
  const [answer, setAnswer] = useState("");

  const questions = [
    {
      question: "1. What is React?",
      answer: "React is a JavaScript library used to build user interfaces."
    },
    {
      question: "2. What is JSX?",
      answer: "JSX is a syntax that allows us to write HTML inside JavaScript."
    },
    {
      question: "3. What is a Component?",
      answer: "A component is a reusable part of a React application."
    },
    {
      question: "4. What are Props?",
      answer: "Props are used to pass data from one component to another."
    },
    {
      question: "5. What is useState()?",
      answer: "useState() is a React Hook used to store and update state."
    },
    {
      question: "6. What is the purpose of React Router?",
      answer: "React Router is used to navigate between different pages."
    },
    {
      question: "7. Why do we use map() in React?",
 