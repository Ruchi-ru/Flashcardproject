import "../Form.css";
import axios from "axios";
import { useState } from "react";
const Form = ({ addFlashcard }) => {
  //Initializing the form
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  //calling the api
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (!question || !answer) return;
    axios
      .post("https://67d0562b825945773eb084a9.mockapi.io/flashcard", {
        question: question,
        answer: answer,
      })
      .then((res) => {
        // Add the new flashcard
        addFlashcard(res.data);
        // Reset the form
        setQuestion("");
        setAnswer("");
      })
  };
  return (
    <>
      <div className="form">
        <label>Question: </label>
        <input
          placeholder="Enter the question"
          type="text"
          id="question"
          onChange={(e) => setQuestion(e.target.value)}
        ></input>
        <br></br>
        <label>Answer: </label>
        <input
          placeholder="Enter the answer"
          type="text"
          id="answer"
          onChange={(e) => setAnswer(e.target.value)}
        ></input>
        <br></br>
        <button className="btn-add" onClick={handlesubmit}>
          Add
        </button>
      </div>
    </>
  );
};
export default Form;
