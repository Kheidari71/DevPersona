import { useState } from 'react'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import TestPage from './components/TestPage'
import ResultsPage from './components/ResultsPage'
import { LanguageProvider } from './contexts/LanguageContext'
import type { PersonalityProfile } from './data/testData'

type AppState = 'landing' | 'test' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [testResults, setTestResults] = useState<PersonalityProfile | null>(null);

  const handleStartTest = () => {
    setCurrentState('test');
  };

  const handleTestComplete = (results: PersonalityProfile) => {
    setTestResults(results);
    setCurrentState('results');
  };

  const handleRetakeTest = () => {
    setTestResults(null);
    setCurrentState('test');
  };

  const handleNavigateHome = () => {
    setCurrentState('landing');
    setTestResults(null);
  };

  return (
    <LanguageProvider>
      <Layout onNavigateHome={handleNavigateHome}>
        {currentState === 'landing' && (
          <LandingPage onStartTest={handleStartTest} />
        )}
        {currentState === 'test' && (
          <TestPage 
            onTestComplete={handleTestComplete}
            onGoBack={handleNavigateHome}
          />
        )}
        {currentState === 'results' && testResults && (
          <ResultsPage
            result={testResults}
            onRestart={handleRetakeTest}
          />
        )}
      </Layout>
    </LanguageProvider>
  )
}

export default App
