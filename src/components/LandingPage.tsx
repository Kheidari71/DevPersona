import React from 'react';

interface LandingPageProps {
  onStartTest: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStartTest }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8" style={{backgroundColor: '#0a0a0a', padding: '2rem 1rem'}}>
      <div className="max-w-4xl w-full" style={{maxWidth: '64rem', width: '100%', margin: '0 auto'}}>
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in" style={{marginBottom: '3rem', textAlign: 'center'}}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem', fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>
            Discover Your
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" style={{background: 'linear-gradient(to right, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block', fontFamily: 'Orbitron, monospace', letterSpacing: '0.1em'}}>
              Developer Personality
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{color: '#d1d5db', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Inter, sans-serif', lineHeight: '1.6'}}>
            Take our scientifically-designed personality assessment to discover your ideal tech stack, 
            career path, and work environment. Get personalized insights in minutes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-slide-up" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #374151'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(to right, #6366f1, #8b5cf6)', width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
              <span className="text-white text-xl">🧠</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2" style={{color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>Smart Analysis</h3>
            <p className="text-gray-400" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.5'}}>Our proven algorithm analyzes your personality traits and matches them to ideal tech careers and work styles.</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-slide-up" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #374151', animationDelay: '0.1s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(to right, #8b5cf6, #6366f1)', width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
              <span className="text-white text-xl">💼</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2" style={{color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>Career Guidance</h3>
            <p className="text-gray-400" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.5'}}>Get personalized recommendations for programming languages, frameworks, and career paths based on your personality.</p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-slide-up" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #374151', animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-lg flex items-center justify-center mb-4" style={{background: 'linear-gradient(to right, #059669, #d97706)', width: '3rem', height: '3rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2" style={{color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}>Instant Results</h3>
            <p className="text-gray-400" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif', lineHeight: '1.5'}}>Complete the assessment in minutes and get detailed, actionable insights immediately. No waiting, no complexity.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{textAlign: 'center', animationDelay: '0.3s'}}>
          <button
            onClick={onStartTest}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{background: 'linear-gradient(to right, #6366f1, #8b5cf6)', color: 'white', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '0.75rem', fontSize: '1.125rem', transition: 'all 0.3s', transform: 'scale(1)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.02em'}}
          >
            Start Your Assessment
          </button>
          <p className="text-gray-400 mt-4 text-sm" style={{color: '#9ca3af', marginTop: '1rem', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif'}}>
            Takes only 5 minutes • 100% Free • No registration required.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 text-center" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '3rem', textAlign: 'center'}}>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.5rem', padding: '1rem', border: '1px solid #374151'}}>
            <div className="text-2xl font-bold text-indigo-400" style={{color: '#818cf8', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>10K+</div>
            <div className="text-gray-400 text-sm" style={{color: '#9ca3af', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif'}}>Developers Tested</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.5rem', padding: '1rem', border: '1px solid #374151'}}>
            <div className="text-2xl font-bold text-purple-400" style={{color: '#a78bfa', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>95%</div>
            <div className="text-gray-400 text-sm" style={{color: '#9ca3af', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif'}}>Accuracy Rate</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4" style={{backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.5rem', padding: '1rem', border: '1px solid #374151'}}>
            <div className="text-2xl font-bold text-emerald-400" style={{color: '#34d399', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron, monospace', letterSpacing: '0.05em'}}>4.9★</div>
            <div className="text-gray-400 text-sm" style={{color: '#9ca3af', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif'}}>User Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;