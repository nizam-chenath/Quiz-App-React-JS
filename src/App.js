import React from "react";
const API_URL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy"

function App() {
  return (
    <div className="container">
      <div class="bg-white text-red-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">1-Questions will be show here......            ?</h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer1</button> 
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow mb-4">Answer2</button> 
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow">Answer3</button> 
        <button className="bg-white w-5/12 p-4 text-purple-800 font-semibold rounded shadow">Answer4</button> 
      </div>
    </div>
  );
}

export default App;
