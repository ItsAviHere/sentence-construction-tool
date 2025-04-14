import React from 'react';
 
import { useEffect, useState } from 'react';
import { useQuiz } from './../context/QuixContext';
import { useNavigate } from 'react-router-dom';

const SentenceQuestion = () => {
  const {
    questions, setQuestions,
    currentQ, setCurrentQ,
    userAnswers, setUserAnswers,
    score, setScore
  } = useQuiz();

  const [timer, setTimer] = useState(30);
  const [filled, setFilled] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

   
  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;

    setTimer(30);
    setFilled(new Array(questions[currentQ].blanks).fill(null));
    setSelected([]);
  }, [currentQ, questions]);

  useEffect(() => {
    if (timer === 0) handleNext();
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const fillBlank = (index, word) => {
    const newFilled = [...filled];
    newFilled[index] = word;
    setFilled(newFilled);
    setSelected([...selected, word]);
  };

  const unfillBlank = (index) => {
    const word = filled[index];
    const newFilled = [...filled];
    newFilled[index] = null;
    setFilled(newFilled);
    setSelected(selected.filter(w => w !== word));
  };

  const handleNext = () => {
    const current = questions[currentQ];
    const isCorrect = JSON.stringify(current.answer) === JSON.stringify(filled);
    if (isCorrect) setScore(prev => prev + 1);

    setUserAnswers([...userAnswers, { question: current, filled, isCorrect }]);

    if (currentQ + 1 >= questions.length) {
      navigate('/feedback');
    } else {
      setCurrentQ(prev => prev + 1);
    }
  };

  if (questions.length === 0) return <p>Loading...</p>;

  const current = questions[currentQ];
  const options = ['Different', 'Turned', 'Outcome', 'Quick'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 sm:p-8">
        
        <span className=" ml-4 text-sm font-medium text-gray-700">0:{timer}</span>
        <button className="text-sm text-gray-500 hover:text-red-500 float-end bg-gray-200 p-1 w-12 mr-3 rounded-lg">Quit</button>
        <div className="flex items-center justify-between mt-3 mb-6">
           
          <div className="flex-1 mx-4 flex gap-1">
            {[...Array(questions.length)].map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-sm w-full ${
                  i <=currentQ ? (i === currentQ ? 'bg-sky-200' : 'bg-sky-700') : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
           
        </div>

        
        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Select the missing words in the correct order
        </p>

        
        <p className="text-center text-gray-800 text-lg leading-relaxed mb-6">
        {
          current.sentence.split(/(\{\d+\})/g).map((part, i) => {
            const match = part.match(/\{(\d+)\}/);
            if (match) {
              const idx = parseInt(match[1]);
              return (
                <span key={i} className="inline-block border px-2 py-1 mx-1 cursor-pointer bg-gray-100"
                      onClick={() => filled[idx] && unfillBlank(idx)}>
                  {filled[idx] || '____'}
                </span>
              );
            } else {
              return <span key={i}>{part}</span>;
            }
          })
        }
        </p>

        {/* Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
        {current.options.map((word, i) => (
          <button key={i} className={`px-3 py-1 border rounded ${selected.includes(word) ? 'bg-gray-300' : 'bg-blue-100'}`}
                  disabled={selected.includes(word)}
                  onClick={() => {
                    const nextBlank = filled.indexOf(null);
                    if (nextBlank !== -1) fillBlank(nextBlank, word);
                  }}>
            {word}
          </button>
        ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className=" bg-sky-700 text-white px-4 py-2 rounded disabled:opacity-50" 
            disabled={filled.includes(null)}
            onClick={handleNext}>Next
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentenceQuestion;
