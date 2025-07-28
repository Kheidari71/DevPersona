import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <span className="text-sm text-gray-300">Language:</span>
      <div className="flex border rounded-md overflow-hidden">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'fr'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 