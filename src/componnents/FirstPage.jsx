// src/pages/ FirstPage.jsx
import React from 'react';
 import { Link } from 'react-router-dom';

const  FirstPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 text-center">
        
        
         
        <div className="flex justify-center mb-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8M8 8h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Sentence Construction</h1>
        <p className="text-gray-500 mb-6">
          Select the correct words to complete the sentence by arranging the provided options in the right order.
        </p>

        
        <div className="flex justify-center gap-6 mb-6 text-sm">
          <div>
            <div className="font-medium text-gray-700">Time Per Question</div>
            <div className="text-gray-600">30 sec</div>
          </div>
          <div>
            <div className="font-medium text-gray-700">Total Questions</div>
            <div className="text-gray-600">10</div>
          </div>
          <div>
            <div className="font-medium text-gray-700">Coins</div>
            <div className="text-yellow-500 font-bold">0</div>
          </div>
        </div>

         
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">Back</button>
          <Link to="/a"> <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start</button></Link>
        </div>
      </div>
    </div>
  );
};

export default  FirstPage;
