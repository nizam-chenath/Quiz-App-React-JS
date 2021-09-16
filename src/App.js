import React, {useState, useEffect}  from "react";
import { Questionaire } from "./Components";
const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy"

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
      setQuestions(data.results);
    });
  }, []);

  const handleAnswer = (answer)=>{
    const newIndex =currentIndex + 1
    setCurrentIndex(newIndex);
    if(answer === questions[currentIndex].correct_answer){
       // increse the answer
       setScore(score + 1);
    }
    if(newIndex >= questions.length){
      setGameEnded(true);
    }
  };

  return (
     gameEnded ? (
       <h1 className="text-3xl text-white font-bold">
         Your score {score}
       </h1>
     ) : (questions.length > 0 ? (
    <div className="container">
          (<Questionaire data={questions[currentIndex]}
           handleAnswer={handleAnswer}/>
    </div>
    
    ) : (
      <h1 className="text-2xl text-white font-bold">Loading.....</h1>
    )
  ));
}

export default App;
