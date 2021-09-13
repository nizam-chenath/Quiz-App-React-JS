import React from "react";

const Questionaire = ( { data:{question, correct_answer, incorrect_answers},
})=>(
    <div>
        <div class="bg-white text-red-800 p-10 rounded shadow-md">
          <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question}}></h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{correct_answer}</button> 
          <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{incorrect_answers[0]}</button> 
          <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{incorrect_answers[1]}</button> 
          <button className="bg-white  p-4 text-purple-800 font-semibold rounded shadow">{incorrect_answers[2]}</button> 
        </div>
    </div>
);
export default Questionaire;