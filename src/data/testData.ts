// Developer Personality Test Data Structure
// Section 1: Basic Type Definitions

// This interface defines what a single question looks like in our test
export interface Question {
  id: number;                // Unique identifier for the question
  text: string;              // The actual question text
  options: QuestionOption[]; // Array of possible answers (each targets different
  //  personality types)
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
  },
  {
    id: 4,
    text: "How do you prefer to learn a new technology?",
    options: [
      {
        id: 'a',
        text: 'Read documentation and analyze examples',
        score: 1 // Analytical
      },
      {
        id: 'b',
        text: 'Experiment and build something creative',
        score: 1 // Creative
      },
      {
        id: 'c',
        text: 'Follow a structured online course',
        score: 1 // Systematic
      },
      {
        id: 'd',
        text: 'Join a study group or ask colleagues',
        score: 1 // Collaborative
      }
    ]
  },
  {
    id: 5,
    text: "What motivates you most in a development project?",
    options: [
      {
        id: 'a',
        text: 'Solving challenging technical problems',
        score: 1 // Analytical
      },
      {
        id: 'b',
        text: 'Creating beautiful and unique user experiences',
        score: 1 // Creative
      },
      {
        id: 'c',
        text: 'Organizing tasks and optimizing workflow',
        score: 1 // Systematic
      },
      {
        id: 'd',
        text: 'Collaborating and sharing knowledge',
        score: 1 // Collaborative
      }
    ]
  },
  {
    id: 6,
    text: "How do you handle tight deadlines?",
    options: [
      {
        id: 'a',
        text: 'Prioritize tasks based on impact and data',
        score: 1 // Analytical
      },
      {
        id: 'b',
        text: 'Find creative shortcuts and solutions',
        score: 1 // Creative
      },
      {
        id: 'c',
        text: 'Create a detailed plan and checklist',
        score: 1 // Systematic
      },
      {
        id: 'd',
        text: 'Coordinate with the team to divide work',
        score: 1 // Collaborative
      }
    ]
  },
  {
    id: 7,
    text: "Which part of a software project do you enjoy most?",
    options: [
      {
        id: 'a',
        text: 'Architecting the system and logic',
        score: 1 // Analytical
      },
      {
        id: 'b',
        text: 'Designing the UI and animations',
        score: 1 // Creative
      },
      {
        id: 'c',
        text: 'Setting up processes and documentation',
        score: 1 // Systematic
      },
      {
        id: 'd',
        text: 'Facilitating meetings and team syncs',
        score: 1 // Collaborative
      }
    ]
  },
  {
    id: 8,
    text: "How do you approach code reviews?",
    options: [
      {
        id: 'a',
        text: 'Focus on logic and potential bugs',
        score: 1 // Analytical
      },
      {
        id: 'b',
        text: 'Suggest creative improvements',
        score: 1 // Creative
      },
      {
        id: 'c',
        text: 'Check for consistency and standards',
        score: 1 // Systematic
      },
      {
        id: 'd',
        text: 'Encourage open discussion and feedback',
        score: 1 // Collaborative
      }
    ]
  }
];

// Section 4: Scoring Function and Result Type

// The result type for the personality profile
export interface PersonalityProfile {
  scores: Record<string, number>; // e.g., { analytical: 3, creative: 2, ... }
  primary: PersonalityCategory;
  secondary: PersonalityCategory;
}

/**
 * Calculates the personality profile based on user answers.
 * @param selectedOptions - Array of selected option indices (0-3) for each question
 * @returns PersonalityProfile
 */
export function calculatePersonalityProfile(selectedOptions: number[]): PersonalityProfile {
  // Initialize scores for each category
  const scores: Record<string, number> = {
    analytical: 0,
    creative: 0,
    systematic: 0,
    collaborative: 0
  };

  // For each answer, add score to the corresponding category
  TEST_QUESTIONS.forEach((question, qIdx) => {
    const optionIdx = selectedOptions[qIdx];
    if (typeof optionIdx === 'number' && question.options[optionIdx]) {
      // Map option index to category by order: a=analytical, b=creative, c=systematic, d=collaborative
      const categoryId = PERSONALITY_CATEGORIES[optionIdx].id;
      scores[categoryId] += question.options[optionIdx].score;
    }
  });

  // Sort categories by score
  const sortedCategories = PERSONALITY_CATEGORIES.slice().sort((a, b) => scores[b.id] - scores[a.id]);
  const primary = sortedCategories[0];
  const secondary = sortedCategories[1];

  return {
    scores,
    primary,
    secondary
  };
}

