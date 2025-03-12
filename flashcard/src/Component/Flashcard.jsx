import { useState, useEffect } from "react";
import "../Flashcard.css";
import Form from "./Form";
import axios from "axios";
const Flashcard = () => {
  //storing data
  const [data, setData] = useState([]);
  //api calling for displaying data
  function getData() {
    axios
      .get("https://67d0562b825945773eb084a9.mockapi.io/flashcard")
      .then((res) => {
        console.log(res.data);
        setFlashcard(res.data);
      });
  }
  // Fetching flashcards on page
  useEffect(() => {
    getData();
  }, []);
  //Initializing the flashcard
  const [flashcard, setFlashcard] = useState([""]);
  //Initializing flip to front
  const [flip, setFlip] = useState(false);

  //Initializing the page
  const [currentpage, setCurrentpage] = useState(0);

  //function for previous button
  const handleprev = () => {
    setCurrentpage(currentpage - 1);
  };

  //function for next button
  const handlenext = () => {
    setCurrentpage(currentpage + 1);
  };

  // Function to add a new flashcard
  const addFlashcard = (newFlashcard) => {
    setFlashcard([...flashcard, { id: flashcard.length + 1, ...newFlashcard }]);
  };
  return (
    <>
      <h1>Flashcard</h1>
      <div className="form-section">
        <Form addFlashcard={addFlashcard} />
      </div>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front">{flashcard[currentpage].question}</div>
        <div className="back">{flashcard[currentpage].answer}</div>
      </div>
      <p className="counter">
        {currentpage + 1} of {flashcard.length}
      </p>
      <div className="button-container">
        <button onClick={() => handleprev()} disabled={currentpage === 0}>
          Previous
        </button>
        <button
          onClick={() => handlenext()}
          disabled={currentpage === flashcard.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Flashcard;
