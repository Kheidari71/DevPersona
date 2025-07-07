export interface FeatureData {
  icon: string;
  title: string;
  description: string;
  gradientColors: {
    from: string;
    to: string;
  };
}

export interface StatData {
  value: string;
  label: string;
  color: string;
}

export const featuresData: FeatureData[] = [
  {
    icon: '🧠',
    title: 'Smart Analysis',
    description: 'Our proven algorithm analyzes your personality traits and matches them to ideal tech careers and work styles.',
    gradientColors: {
      from: '#6366f1',
      to: '#8b5cf6'
    }
  },
  {
    icon: '💼',
    title: 'Career Guidance',
    description: 'Get personalized recommendations for programming languages, frameworks, and career paths based on your personality.',
    gradientColors: {
      from: '#8b5cf6',
      to: '#6366f1'
    }
  },
  {
    icon: '🚀',
    title: 'Instant Results',
    description: 'Complete the assessment in minutes and get detailed, actionable insights immediately. No waiting, no complexity.',
    gradientColors: {
      from: '#059669',
      to: '#d97706'
    }
  }
];

export const statsData: StatData[] = [
  {
    value: '10K+',
    label: 'Developers Tested',
    color: '#818cf8'
  },
  {
    value: '95%',
    label: 'Accuracy Rate',
    color: '#a78bfa'
  },
  {
    value: '4.9★',
    label: 'User Rating',
    color: '#34d399'
  }
]; 