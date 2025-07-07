import { useState } from 'react'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'

type AppState = 'landing' | 'test' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');

  const handleStartTest = () => {
    setCurrentState('test');
  };

  const handleShowResults = () => {
    setCurrentState('results');
  };

  const handleBackToLanding = () => {
    setCurrentState('landing');
  };

  return (
    <Layout>
      {currentState === 'landing' && (
        <LandingPage onStartTest={handleStartTest} />
      )}
      
      {currentState === 'test' && (
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-2xl w-full bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Personality Assessment
            </h2>
            <p className="text-gray-300 mb-8">
              This is where the test will go. Coming soon!
            </p>
            <div className="space-x-4">
              <button
                onClick={handleShowResults}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
              >
                See Sample Results
              </button>
              <button
                onClick={handleBackToLanding}
                className="bg-gray-700 border border-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:bg-gray-600"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
      
      {currentState === 'results' && (
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-2xl w-full bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Your Results
            </h2>
            <p className="text-gray-300 mb-8">
              This is where the results will go. Coming soon!
            </p>
            <button
              onClick={handleBackToLanding}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Take Test Again
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default App
