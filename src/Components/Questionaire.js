import React from "react";

const Button = ({answer, className})=>(
  <button 
  className={`bg-white  p-4 text-purple-800 font-semibold rounded shadow ${className}`} >
  {answer}
  </button> 
);

const Questionaire = ( { 
  handleAnswer,
  data:{question, correct_answer, 
  incorrect_answers},
})=>{
  const shuffledAnswer = [correct_answer, ...incorrect_answers]
  .sort(
    ()=> Math.random() - 0.5
  );
  return(
    <div>
    <div class="bg-white text-red-800 p-10 rounded shadow-md">
      <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question}}></h2>
    </div>
    <div className="grid grid-cols-2 gap-6 mt-6">
     <Button
       className={
         correct_answer === shuffledAnswer[0]?'bg-red-300' : ''
       }
        onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]}/>
     <Button
      className={
        correct_answer === shuffledAnswer[1]?'bg-red-300' : ''
      }
       onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
     <Button
      className={
        correct_answer === shuffledAnswer[2]?'bg-red-300' : ''
      }
       onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
     <Button
      className={
        correct_answer === shuffledAnswer[3]?'bg-red-300' : ''
      }
       onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>

    </div>
</div>
)};


export default Questionaire;