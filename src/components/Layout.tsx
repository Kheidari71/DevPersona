import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" style={{minHeight: '100vh', background: 'linear-gradient(to bottom right, #111827, #111827, #1f2937)'}}>
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm" style={{borderBottom: '1px solid #374151', backgroundColor: 'rgba(31, 41, 55, 0.5)', backdropFilter: 'blur(4px)'}}>
        <div className="max-w-6xl mx-auto px-4 py-4" style={{maxWidth: '72rem', margin: '0 auto', padding: '1rem'}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center" style={{width: '2rem', height: '2rem', background: 'linear-gradient(to right, #6366f1, #8b5cf6)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span className="text-white font-bold text-lg" style={{fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>D</span>
              </div>
              <h1 className="text-white text-xl font-bold" style={{fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>DevPersona</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" style={{color: '#c4c7cd', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>About</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" style={{color: '#c4c7cd', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" style={{color: '#c4c7cd', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1" style={{flex: '1'}}>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm" style={{borderTop: '1px solid #374151', backgroundColor: 'rgba(31, 41, 55, 0.5)', backdropFilter: 'blur(4px)'}}>
        <div className="max-w-6xl mx-auto px-4 py-6" style={{maxWidth: '72rem', margin: '0 auto', padding: '1rem 1.5rem'}}>
          <div className="text-center text-gray-400 text-sm" style={{color: '#9ca3af', fontSize: '0.875rem', textAlign: 'center', fontFamily: 'Inter, sans-serif'}}>
            <p>© 2024 DevPersona. Built with React & TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;