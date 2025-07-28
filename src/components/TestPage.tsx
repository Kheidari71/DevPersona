import React, { useState } from 'react';
import { calculatePersonalityProfile } from '../data/testData';
import { useLanguage } from '../contexts/LanguageContext';
import type { PersonalityProfile } from '../data/testData';

const TestPage: React.FC<{ 
  onTestComplete: (result: PersonalityProfile) => void;
  onGoBack: () => void;
}> = ({ onTestComplete, onGoBack }) => {
  const { t } = useLanguage();
  
  // State to track which question the user is on
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State to store the user's selected option index for each question
  const [answers, setAnswers] = useState<number[]>([]);

  // Get total number of questions from translations
  const totalQuestions = 10; // We know we have 10 questions

  // Handler for when a user selects an option
  const handleOptionSelect = (optionIndex: number) => {
    // Save the selected answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    // If it's the last question, calculate the result and finish
    if (currentQuestion === totalQuestions - 1) {
      const result = calculatePersonalityProfile(newAnswers);
      onTestComplete(result);
    } else {
      // Otherwise, move to the next question
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Get current question text and options from translations
  const questionText = t(`questions.${currentQuestion}.text`);
  const questionOptions = [
    t(`questions.${currentQuestion}.options.0`),
    t(`questions.${currentQuestion}.options.1`),
    t(`questions.${currentQuestion}.options.2`),
    t(`questions.${currentQuestion}.options.3`)
  ];

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          {t('test.title')} {currentQuestion + 1} {t('test.questionCounter')} {totalQuestions}
        </h2>
        <button
          onClick={onGoBack}
          className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
        >
          ← {t('test.backToHome')}
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}% {t('test.progressComplete')}
        </p>
      </div>

      <p className="mb-6 text-lg text-gray-200">{questionText}</p>
      <div className="space-y-4">
        {questionOptions.map((option, idx) => (
          <button
            key={idx}
            className="w-full py-3 px-4 rounded bg-gray-800 text-gray-100 hover:bg-indigo-600 transition-colors duration-200 text-left"
            onClick={() => handleOptionSelect(idx)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestPage; 