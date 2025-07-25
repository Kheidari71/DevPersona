import React from 'react';
import type { PersonalityProfile } from '../data/testData';

const ResultsPage: React.FC<{ result: PersonalityProfile; onRestart: () => void }> = ({ result, onRestart }) => {
  // Placeholder recommendations based on primary type
  const recommendations: Record<string, string> = {
    analytical: `You thrive on logic, critical thinking, and solving complex problems. Your analytical mindset makes you a natural fit for roles that require deep technical expertise and attention to detail. You excel at breaking down large challenges into manageable pieces and enjoy optimizing systems for performance and reliability.

Ideal roles: Backend Developer, Data Engineer, Algorithm Specialist, DevOps Engineer
Recommended technologies: Python, Go, SQL, cloud platforms (AWS, Azure, GCP)
Work environment: You perform best in structured teams where you can focus on technical challenges and collaborate with other experts.

Keep pushing your boundaries by tackling new algorithms, contributing to open-source projects, or exploring advanced topics like machine learning or distributed systems.`,
    creative: `Your creativity and passion for innovation set you apart. You love designing beautiful, intuitive user experiences and thinking outside the box to solve problems. You’re drawn to projects where you can express your ideas visually and experiment with new technologies.

Ideal roles: Frontend Developer, UI/UX Designer, Creative Technologist, Animation Engineer
Recommended technologies: React, Figma, CSS-in-JS, Three.js, WebGL
Work environment: You shine in collaborative, open-minded teams that value experimentation and design thinking.

Consider building a portfolio of creative projects, learning about design systems, or exploring interactive media and creative coding communities.`,
    systematic: `You are highly organized, methodical, and value structure in your work. You excel at creating efficient workflows, maintaining documentation, and ensuring that projects run smoothly from start to finish. Your attention to process and detail helps teams deliver high-quality software on time.

Ideal roles: Project Manager, QA Engineer, Systems Architect, Scrum Master
Recommended technologies: Jira, Confluence, TypeScript, CI/CD tools
Work environment: You thrive in environments with clear processes, well-defined goals, and opportunities to optimize team performance.

Explore certifications in project management (like Scrum or Kanban), contribute to process improvement initiatives, or mentor others in best practices.`,
    collaborative: `You are a natural team player and communicator. You enjoy working closely with others, sharing knowledge, and building consensus. Your empathy and leadership skills make you a valuable asset in any team, especially in roles that require cross-functional collaboration.

Ideal roles: Developer Advocate, Team Lead, Agile Coach, Full-Stack Developer
Recommended technologies: Slack, GitHub, Node.js, REST APIs
Work environment: You excel in dynamic, people-focused teams where open communication and shared goals are prioritized.

Consider leading team meetings, organizing knowledge-sharing sessions, or getting involved in developer communities and events to expand your impact.`,
  };

  const primaryKey = result.primary.id;
  const recommendation = recommendations[primaryKey] || 'Explore different areas of development to find your passion!';

  // Social sharing setup
  const appUrl = "https://devpersona.app"; // Replace with your real URL when deployed
  const shareText = `I just discovered my developer personality: ${result.primary.name}! 🚀\n\n${recommendation}\n\nFind yours at ${appUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`;

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Your Developer Personality</h2>
      <div className="mb-6">
        <span className="text-xl">Dominant Type:</span>
        <span className="ml-2 text-2xl font-extrabold text-indigo-400">{result.primary.id}</span>
      </div>
      
      {/* Frontend/Backend Track Result */}
      <div className="mb-6 p-4 bg-gray-800 rounded-lg border-l-4 border-accent-500">
        <h3 className="text-lg font-semibold mb-2 text-accent-400">Development Track</h3>
        <div className="flex items-center gap-3">
          <span className="text-gray-300">You lean toward:</span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            result.trackResult === 'frontend' 
              ? 'bg-purple-600 text-white' 
              : result.trackResult === 'backend'
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white'
          }`}>
            {result.trackResult === 'frontend' && '🎨 Frontend Development'}
            {result.trackResult === 'backend' && '⚙️ Backend Development'}
            {result.trackResult === 'balanced' && '🔄 Full-Stack Development'}
          </span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          {result.trackResult === 'frontend' && 'You enjoy building user interfaces, working with design, and creating interactive experiences.'}
          {result.trackResult === 'backend' && 'You prefer working with servers, databases, APIs, and system architecture.'}
          {result.trackResult === 'balanced' && 'You have balanced interests across the full development stack - frontend and backend appeal to you equally.'}
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Your Scores:</h3>
        <ul className="space-y-1">
          {Object.entries(result.scores).map(([category, score]) => (
            <li key={category} className="flex justify-between">
              <span className="capitalize">{category}</span>
              <span className="font-mono">{score}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8 p-4 bg-gray-800 rounded">
        <h4 className="text-lg font-semibold mb-2 text-indigo-300">Recommendation</h4>
        <p className="text-gray-200">{recommendation}</p>
      </div>
      {/* Social Sharing Buttons */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors text-center"
        >
          Share on Twitter
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-colors text-center"
        >
          Share on LinkedIn
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shareText);
            alert('Result copied to clipboard!');
          }}
          className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white font-semibold transition-colors text-center"
        >
          Copy Result
        </button>
      </div>
      <button
        className="mt-4 px-6 py-3 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors duration-200"
        onClick={onRestart}
      >
        Restart Test
      </button>
    </div>
  );
};

export default ResultsPage; 