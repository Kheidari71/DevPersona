// Developer Personality Test Data Structure
// Section 1: Basic Type Definitions

// This interface defines what a single question looks like in our test
export interface Question {
  id: number;                // Unique identifier for the question
  text: string;              // The actual question text
  options: QuestionOption[]; // Array of possible answers (each targets different personality types)
}

// This interface defines what each answer option looks like
export interface QuestionOption {
  id: string;    // Unique identifier for the option (like 'a', 'b', 'c', 'd')
  text: string;  // The actual answer text
  score: number; // How many points this answer gives to its category
}

// This interface defines what a personality category looks like
export interface PersonalityCategory {
  id: string;          // Unique identifier (like 'analytical', 'creative')
  name: string;        // Display name (like 'Analytical Thinker')
  description: string; // What this personality type means
  color: string;       // Tailwind CSS gradient classes for styling
}

// Section 2: Personality Categories
// These are the 4 main personality types our test will measure

export const PERSONALITY_CATEGORIES: PersonalityCategory[] = [
  {
    id: 'analytical',
    name: 'Analytical Thinker',
    description: 'Loves solving complex problems, data-driven decision making',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'creative',
    name: 'Creative Innovator',
    description: 'Thinks outside the box, values innovation and design',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'systematic',
    name: 'Systematic Organizer',
    description: 'Methodical approach, loves structure and processes',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'collaborative',
    name: 'Collaborative Team Player',
    description: 'Thrives in team environments, great communicator',
    color: 'from-orange-500 to-red-500'
  }
];

// Section 3: Test Questions
// These are the actual questions users will answer
// Each question has 4 options, one for each personality type

export const TEST_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When starting a new coding project, what's your first instinct?",
    options: [
      {
        id: 'a',
        text: 'Research best practices and architectural patterns',
        score: 1 // Points toward 'analytical'
      },
      {
        id: 'b', 
        text: 'Sketch out creative UI concepts and user flows',
        score: 1 // Points toward 'creative'
      },
      {
        id: 'c',
        text: 'Set up project structure and development workflow',
        score: 1 // Points toward 'systematic'
      },
      {
        id: 'd',
        text: 'Discuss requirements with team members',
        score: 1 // Points toward 'collaborative'
      }
    ]
  },
  {
    id: 2,
    text: "Your favorite type of coding challenge is:",
    options: [
      {
        id: 'a',
        text: 'Algorithm optimization and performance tuning',
        score: 1 // Points toward 'analytical'
      },
      {
        id: 'b',
        text: 'Building interactive user interfaces',
        score: 1 // Points toward 'creative' 
      },
      {
        id: 'c',
        text: 'Database design and system architecture',
        score: 1 // Points toward 'systematic'
      },
      {
        id: 'd',
        text: 'Code reviews and pair programming sessions',
        score: 1 // Points toward 'collaborative'
      }
    ]
  },
  {
    id: 3,
    text: "When debugging a complex issue, you typically:",
    options: [
      {
        id: 'a',
        text: 'Analyze logs and use debugging tools systematically',
        score: 1 // Points toward 'analytical'
      },
      {
        id: 'b',
        text: 'Try creative solutions and experiment with fixes',
        score: 1 // Points toward 'creative'
      },
      {
        id: 'c',
        text: 'Follow a methodical step-by-step process',
        score: 1 // Points toward 'systematic'
      },
      {
        id: 'd',
        text: 'Ask teammates for their insights and perspectives',
        score: 1 // Points toward 'collaborative'
      }
    ]
  }
];

