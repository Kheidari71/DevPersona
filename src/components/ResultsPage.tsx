import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { PersonalityProfile } from '../data/testData';

const ResultsPage: React.FC<{ result: PersonalityProfile; onRestart: () => void }> = ({ result, onRestart }) => {
  const { t } = useLanguage();

  // Get recommendation from translations
  const recommendation = t(`personalities.${result.primary.id}.recommendation`);

  // Social sharing setup
  const appUrl = "https://dev-persona-one.vercel.app/?ref=linkedin"; // Cache-busting parameter
  
  // More engaging share text for LinkedIn
  const personalityName = t(`personalities.${result.primary.id}.name`);
  const trackLabel = t(`results.trackLabels.${result.trackResult}`);
  
  const shareText = `🚀 I just discovered my developer personality: ${personalityName}!

✨ Key insights about my coding style:
• Development track: ${trackLabel}
• ${recommendation}

💡 This interactive assessment helped me understand my strengths and career direction better!

🔗 Discover your developer personality: ${appUrl}

#WebDevelopment #TypeScript #React #DeveloperPersonality #TechCareer #Programming`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;
  
  // LinkedIn sharing - using shareArticle API for better text handling
  const linkedInShareText = `🚀 I just discovered my developer personality: ${personalityName}! ✨ Development track: ${trackLabel} 💡 ${recommendation}`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(appUrl)}&title=${encodeURIComponent('DevPersona - Developer Personality Test')}&summary=${encodeURIComponent(linkedInShareText)}&source=DevPersona`;

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8 text-white">
      <h2 className="text-3xl font-bold mb-4">{t('results.title')}</h2>
      <div className="mb-6">
        <span className="text-xl">{t('results.dominantType')}</span>
        <span className="ml-2 text-2xl font-extrabold text-indigo-400">{t(`personalities.${result.primary.id}.name`)}</span>
      </div>
      
      {/* Frontend/Backend Track Result */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg border-l-4 border-accent-500">
        <h3 className="text-lg font-semibold mb-2 text-accent-400">{t('results.developmentTrack')}</h3>
        <div className="flex items-center gap-3">
          <span className="text-gray-300">{t('results.youLeanToward')}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            result.trackResult === 'frontend' 
              ? 'bg-purple-600 text-white' 
              : result.trackResult === 'backend'
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white'
          }`}>
            {t(`results.trackLabels.${result.trackResult}`)}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {t(`results.trackDescriptions.${result.trackResult}`)}
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{t('results.scores')}</h3>
        <ul className="space-y-1">
          {Object.entries(result.scores).map(([category, score]) => (
            <li key={category} className="flex justify-between">
              <span className="capitalize">{t(`personalities.${category}.name`)}</span>
              <span className="font-mono">{score}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8 p-4 bg-gray-800 rounded">
        <h4 className="text-lg font-semibold mb-2 text-indigo-300">{t('results.recommendation')}</h4>
        <p className="text-gray-200">{recommendation}</p>
      </div>
      {/* Social Sharing Buttons */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors text-center"
        >
          {t('results.shareTwitter')}
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-colors text-center"
        >
          {t('results.shareLinkedIn')}
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shareText);
            alert('Result copied to clipboard!');
          }}
          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white font-semibold transition-colors text-center"
        >
          {t('results.copyResult')}
        </button>
      </div>
      <button
        className="mt-4 px-6 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-200"
        onClick={onRestart}
      >
        {t('results.restartTest')}
      </button>
    </div>
  );
};

export default ResultsPage; 