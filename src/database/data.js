// export type Data = {
//   id: number;
//   question: string;
//   options: string[];
// };

export const questions = [
  {
    id: 1,
    question: "const a = []; What does 'typeof a' return?",
    options: ["object", "array", "string", "undefined"],
  },
  {
    id: 2,
    question:
      "Which of the following function of Array object removes the last element from an array and returns that element?",
    options: ["push()", "join()", "pop()", "map()"],
  },
  {
    id: 3,
    question:
      "Which snippet of CSS is commonly used to center a website horizontally?",
    options: [
      "site-align: center;",
      "margin: center;",
      "margin: auto 0;",
      "margin: 0 auto;",
    ],
  },
  {
    id: 4,
    question:
      "Which of the following function of String object returns the character at the specified index?",
    options: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
  },
  {
    id: 5,
    question: "How do you call the function 'myFunction'?",
    options: [
      "myFunction",
      "func myFunction()",
      "myFunction()",
      "None of those",
    ],
  },
];

export const answers = [0, 2, 3, 0, 2];
