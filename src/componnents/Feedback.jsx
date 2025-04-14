import React from 'react';
import { useQuiz } from './../context/QuixContext';

 

const Feedback = () => {
    
    
     
      const { userAnswers, score } = useQuiz();
  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-20 font-sans">
      <h1 className="text-center text-lg font-medium mb-6">Sentence Construction</h1>

      {/* Score Section */}
      <div className="text-center">
        <div className="w-20 h-20 rounded-full border-8 border-green-500 mx-auto flex items-center justify-center text-2xl font-bold text-green-600">
        {score}/10
        </div>
        <p className="text-sm text-gray-600 mt-1">Overall Score</p>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm">
          While you correctly formed several sentences, there are a couple of areas where improvement is needed.
          Pay close attention to sentence structure and word placement to ensure clarity and correctness.
          Review your responses below for more details.
        </p>
        <button className="mt-5 px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 text-sm">
          Go to Dashboard
        </button>
      </div>

      {/* Responses Section */}
      <div className="mt-10">
      {userAnswers.map((item, index) => (
        <div key={index} className="mb-4 p-3 border rounded">
          <p className="mb-1">Q{index + 1}:&nbsp;
            {item.question.sentence.replace(/\{\d+\}/g, (_, i) => ` ${item.filled[i]} `)}
          </p>
          <p className={item.isCorrect ? 'text-green-600' : 'text-red-600'}>
            {item.isCorrect ? 'Correct!' : `Incorrect. Correct: ${item.question.answer.join(', ')}`}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Feedback;