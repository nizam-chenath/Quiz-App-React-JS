import React, {useState, useEffect}  from "react";
import { Questionaire } from "./Components";
const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy"

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrecntQuestion] = useState(undefined)

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
      setQuestions(data.results);
      setCurrecntQuestion(data.results[0])
    });
  }, []);

  const handleAnswer = (answer)=>{
    //check answer

    // show another question

    //change score if correct
  }

  return (
    questions.length > 0 ? (
    <div className="container">
          <Questionaire data={currentQuestion}
           handleAnswer={handleAnswer}/>
    </div>
    
    ) : (
      <h1 className="text-2xl text-white font-bold">Loading.....</h1>
    )
  );
}

export default App;
