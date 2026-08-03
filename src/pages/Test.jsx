import { useState } from "react";

function Test() {
  const [answer, setAnswer] = useState("");

  const questions = [
    {
      question: "1. What is React?",
      answer: "React is used for making user interface and it is a library of javascript."
    },
    {
      question: "2. What is JSX?",
      answer: "JSX is a syntax which help us to write html code in javascript ."
    },
    {
      question: "3. What is a Component?",
      answer: "A component is used for reusability of code instead of writing one code again and again we can write it once."
    },
    {
      question: "4. What are Props?",
      answer: "Props are used to pass data from one component to another ."
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
      answer: "We use map() to display a list of items."
    },
    {
      question: "8. Why is the key prop important while rendering a list?",
      answer: "The key prop helps React identify each item."
    },
    {
      question: "9. What is Conditional Rendering?",
      answer: "Conditional rendering means showing content based on a condition."
    },
    {
      question: "10. What is the difference between State and Props?",
      answer: "State can change, while Props are passed from parent to child."
    }
  ];

  return (
    <div>
      <h1>Theory Questions</h1>

      {questions.map((item, index) => (
        <div key={index}>
          <button onClick={() => setAnswer(item.answer)}>
            {item.question}
          </button>
        </div>
      ))}

      <h2>Answer</h2>
      <p>{answer}</p>
    </div>
  );
}

export default Test;