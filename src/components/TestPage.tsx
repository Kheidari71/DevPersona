import React, { useState } from 'react';
import { TEST_QUESTIONS, calculatePersonalityProfile } from '../data/testData';
import type { PersonalityProfile } from '../data/testData';

const TestPage: React.FC<{ onTestComplete: (result: PersonalityProfile) => void }> = ({ onTestComplete }) => {
  // State to track which question the user is on
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to store the user's selected option index for each question
  const [answers, setAnswers] = useState<number[]>([]);

  // Handler for when a user selects an option
  const handleOptionSelect = (optionIndex: number) => {
    // Save the selected answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // If it's the last question, calculate the result and finish
    if (currentQuestion === TEST_QUESTIONS.length - 1) {
      const result = calculatePersonalityProfile(newAnswers);
      onTestComplete(result);
    } else {
      // Otherwise, move to the next question
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Get the current question object
  const question = TEST_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Question {currentQuestion + 1} of {TEST_QUESTIONS.length}</h2>
      <p className="mb-6 text-lg text-gray-200">{question.text}</p>
      <div className="space-y-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="w-full py-3 px-4 rounded bg-gray-800 text-gray-100 hover:bg-indigo-600 transition-colors duration-200 text-left"
            onClick={() => handleOptionSelect(idx)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage; 