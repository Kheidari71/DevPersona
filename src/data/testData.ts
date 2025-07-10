// Developer Personality Test Data Structure
// Section 1: Basic Type Definitions

// This interface defines what a single question looks like in our test
export interface Question {
  id: number;                    // Unique identifier for the question
  text: string;                  // The actual question text
  category: PersonalityCategory; // Which personality type this question measures
  options: QuestionOption[];     // Array of possible answers
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

