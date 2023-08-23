import { React, useState, useEffect } from "react";
import Questions from "./Questions";
const Faq = () => {
  const [questions, setQuestions] = useState([]); // Changed variable name to 'questions'

  useEffect(() => {
    //   const apiUrl =
    // "https://main--vocal-crostata-93f231.netlify.app/questions.json";
    const apiUrl = "http://localhost:3000/questions.json";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.questions);
        setQuestions(data.questions); // Updated to 'questions'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col mx-[23rem] mt-40">
      <h5 className="text-white font-bold text-4xl">FAQ</h5>
      <div className="flex mt-6 justify-between">
        <p className="text-gray-400">
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </p>
        <div flex flex-col>
          <p className="text-white font-semibold text-xl mb-5">
            Do I need a personal injury report?
          </p>
          <p className="text-gray-400">
            Amet minim mollit non deserunt ullamco est <br />
            sit aliqua dolor do amet sint. Velit officia
            <br /> consequantduis enim velit mollit Exer.{" "}
          </p>
          {questions.map((item) => (
            <Questions itemName={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
