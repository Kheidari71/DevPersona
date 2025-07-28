import React from 'react';
import type { ReactNode } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  children: ReactNode;
  onNavigateHome?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigateHome }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'Inter, sans-serif'}}>
      {/* Header */}
      <header className="p-4 border-b border-gray-800" style={{borderBottomColor: '#1f2937', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity" 
          style={{fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'Orbitron, monospace', cursor: 'pointer'}}
          onClick={onNavigateHome}
        >
          DevPersona
        </h1>
        <LanguageSwitcher />
      </header>

      {/* Main Content */}
      <main className="flex-1" style={{flex: '1', maxWidth: '100%', width: '100%', margin: '0 auto', padding: '0 1rem'}}>
        {children}
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-400 border-t border-gray-800" style={{borderTopColor: '#1f2937', padding: '1rem', textAlign: 'center', color: '#9ca3af', fontFamily: 'Space Grotesk, sans-serif'}}>
        <p>{t('layout.footer')}</p>
      </footer>
    </div>
  );
};

export default Layout;