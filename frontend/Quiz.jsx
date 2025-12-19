import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "To be, or not to be"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
    answer: 'William Shakespeare',
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', fontFamily: 'Arial, sans-serif', background: '#f9f9f9', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px #ccc' }}>
      <h2>Quiz App</h2>
      {showScore ? (
        <div>
          <h3>Your score: {score} / {questions.length}</h3>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: 16 }}>
            <strong>Q{current + 1}:</strong> {questions[current].question}
          </div>
          <div>
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{ display: 'block', width: '100%', margin: '8px 0', padding: 10, borderRadius: 4, border: '1px solid #aaa', background: '#fff', cursor: 'pointer' }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
