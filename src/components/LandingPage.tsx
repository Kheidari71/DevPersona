import React from 'react';
import FeatureCard from './FeatureCard';
import StatCard from './StatCard';
import { useLanguage } from '../contexts/LanguageContext';
import type { FeatureData, StatData } from '../data/landingPageData';

interface LandingPageProps {
  onStartTest: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartTest }) => {
  const { t } = useLanguage();

  // Create features data using translations
  const featuresData: FeatureData[] = [
    {
      icon: '🧠',
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
      gradientColors: {
        from: '#6366f1',
        to: '#8b5cf6'
      }
    },
    {
      icon: '💼',
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
      gradientColors: {
        from: '#8b5cf6',
        to: '#6366f1'
      }
    },
    {
      icon: '📊',
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
      gradientColors: {
        from: '#059669',
        to: '#d97706'
      }
    }
  ];

  // Create stats data using translations
  const statsData: StatData[] = [
    {
      value: t('stats.items.0.value'),
      label: t('stats.items.0.label'),
      color: '#818cf8'
    },
    {
      value: t('stats.items.1.value'),
      label: t('stats.items.1.label'),
      color: '#a78bfa'
    },
    {
      value: t('stats.items.2.value'),
      label: t('stats.items.2.label'),
      color: '#34d399'
    },
    {
      value: t('stats.items.3.value'),
      label: t('stats.items.3.label'),
      color: '#fbbf24'
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8" style={{backgroundColor: '#0a0a0a', padding: '2rem 1rem'}}>
      <div className="max-w-4xl w-full" style={{maxWidth: '64rem', width: '100%', margin: '0 auto'}}>
        
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in" style={{marginBottom: '3rem', textAlign: 'center'}}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem', fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>
            {t('hero.subtitle')}
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{background: 'linear-gradient(to right, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block', fontFamily: 'Orbitron, monospace', letterSpacing: '0.1em'}}>
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Inter, sans-serif', lineHeight: '1.6'}}>
            {t('hero.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white" style={{fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem', color: 'white', fontFamily: 'Space Grotesk, sans-serif'}}>
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <button
            onClick={onStartTest}
            className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{padding: '1rem 2rem', fontSize: '1.125rem', fontWeight: 'bold', color: 'white', background: 'linear-gradient(to right, #6366f1, #8b5cf6)', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}
          >
            {t('hero.ctaButton')}
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;