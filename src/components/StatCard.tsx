import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  return (
    <div 
      className="bg-gray-800 border border-gray-700 rounded-lg p-4" 
      style={{
        backgroundColor: '#1f2937', 
        borderColor: '#374151', 
        borderRadius: '0.5rem', 
        padding: '1rem', 
        border: '1px solid #374151'
      }}
    >
      <div 
        className="text-2xl font-bold" 
        style={{
          color, 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          fontFamily: 'Orbitron, monospace', 
          letterSpacing: '0.05em'
        }}
      >
        {value}
      </div>
      <div 
        className="text-gray-400 text-sm" 
        style={{
          color: '#9ca3af', 
          fontSize: '0.875rem', 
          fontFamily: 'Inter, sans-serif'
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default StatCard; 