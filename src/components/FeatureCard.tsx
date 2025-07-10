import React from 'react';
import type { FeatureData } from '../data/landingPageData';

interface FeatureCardProps extends FeatureData {
  animationDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradientColors, 
  animationDelay = '0s' 
}) => {
  return (
    <div 
      className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-slide-up" 
      style={{
        backgroundColor: '#1f2937', 
        borderColor: '#374151', 
        borderRadius: '0.75rem', 
        padding: '1.5rem', 
        border: '1px solid #374151',
        animationDelay
      }}
    >
      <div 
        className="w-12 h-12 bg-gradient-to-r rounded-lg flex items-center justify-center mb-4" 
        style={{
          background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`,
          width: '3rem', 
          height: '3rem', 
          borderRadius: '0.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '1rem'
        }}
      >
        <span className="text-white text-xl">{icon}</span>
      </div>
      <h3 
        className="text-white text-lg font-semibold mb-2" 
        style={{
          color: 'white', 
          fontSize: '1.125rem', 
          fontWeight: '600', 
          marginBottom: '0.5rem', 
          fontFamily: 'Space Grotesk, sans-serif', 
          letterSpacing: '0.02em'
        }}
      >
        {title}
      </h3>
      <p 
        className="text-gray-400" 
        style={{
          color: '#9ca3af', 
          fontFamily: 'Inter, sans-serif', 
          lineHeight: '1.5'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 