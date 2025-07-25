import React from 'react';
import type { PersonalityProfile } from '../data/testData';

const ResultsPage: React.FC<{ result: PersonalityProfile; onRestart: () => void }> = ({ result, onRestart }) => {
  // Placeholder recommendations based on primary type
  const recommendations: Record<string, string> = {
    analytical: 'You thrive on logic and problem-solving. Consider roles in backend development, data engineering, or algorithm design.',
    creative: 'Your creativity shines! Explore UI/UX design, frontend development, or creative coding projects.',
    collaborative: 'You work best in teams. Agile environments, project management, or developer advocacy could be great fits.',
    experimental: 'You love to try new things. Look into prototyping, R&D, or emerging tech like AI and AR/VR.',
  };

  const primaryKey = result.primary.id;
  const recommendation = recommendations[primaryKey] || 'Explore different areas of development to find your passion!';

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Your Developer Personality</h2>
      <div className="mb-6">
        <span className="text-xl">Dominant Type:</span>
        <span className="ml-2 text-2xl font-extrabold text-indigo-400">{result.primary.id}</span>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Scores:</h3>
        <ul className="space-y-1">
          {Object.entries(result.scores).map(([category, score]) => (
            <li key={category} className="flex justify-between">
              <span className="capitalize">{category}</span>
              <span className="font-mono">{score}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8 p-4 bg-gray-800 rounded">
        <h4 className="text-lg font-semibold mb-2 text-indigo-300">Recommendation</h4>
        <p className="text-gray-200">{recommendation}</p>
      </div>
      <button
        className="mt-4 px-6 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-200"
        onClick={onRestart}
      >
        Restart Test
      </button>
    </div>
  );
};

export default ResultsPage; 