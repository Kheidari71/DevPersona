import type { Language } from '../contexts/LanguageContext';

// Translation structure type
export interface TranslationData {
  // Landing Page
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  stats: {
    items: {
      value: string;
      label: string;
    }[];
  };
  
  // Test Page
  test: {
    title: string;
    questionCounter: string;
    backToHome: string;
    progressComplete: string;
  };
  
  // Results Page
  results: {
    title: string;
    dominantType: string;
    developmentTrack: string;
    youLeanToward: string;
    scores: string;
    recommendation: string;
    shareTwitter: string;
    shareLinkedIn: string;
    copyResult: string;
    restartTest: string;
    trackDescriptions: {
      frontend: string;
      backend: string;
      balanced: string;
    };
    trackLabels: {
      frontend: string;
      backend: string;
      balanced: string;
    };
  };
  
  // Layout
  layout: {
    footer: string;
  };
  
  // Personality types
  personalities: {
    analytical: {
      name: string;
      description: string;
      recommendation: string;
    };
    creative: {
      name: string;
      description: string;
      recommendation: string;
    };
    systematic: {
      name: string;
      description: string;
      recommendation: string;
    };
    collaborative: {
      name: string;
      description: string;
      recommendation: string;
    };
  };
  
  // Test questions
  questions: {
    text: string;
    options: string[];
  }[];
}

// English translations
const en: TranslationData = {
  hero: {
    title: "Developer Personality",
    subtitle: "Discover Your",
    description: "Take our scientifically-designed personality assessment to discover your ideal tech stack, career path, and work environment. Get personalized insights in minutes.",
    ctaButton: "Start Your Assessment"
  },
  features: {
    title: "Why Take This Test?",
    items: [
      {
        title: "Personalized Career Insights",
        description: "Get tailored recommendations for your ideal development roles and tech stack based on your personality."
      },
      {
        title: "Quick & Scientific",
        description: "Complete the assessment in under 5 minutes with questions designed by industry experts."
      },
      {
        title: "Shareable Results",
        description: "Share your developer personality with your network and showcase your self-awareness to potential employers."
      }
    ]
  },
  stats: {
    items: [
      { value: "25K+", label: "Developers Profiled" },
      { value: "98%", label: "Personalization Satisfaction" },
      { value: "4.9★", label: "User Rating" },
      { value: "120+", label: "Countries Reached" }
    ]
  },
  test: {
    title: "Question",
    questionCounter: "of",
    backToHome: "Back to Home",
    progressComplete: "Complete"
  },
  results: {
    title: "Your Developer Personality",
    dominantType: "Dominant Type:",
    developmentTrack: "Development Track",
    youLeanToward: "You lean toward:",
    scores: "Your Scores:",
    recommendation: "Recommendation",
    shareTwitter: "Share on Twitter",
    shareLinkedIn: "Share on LinkedIn",
    copyResult: "Copy Result",
    restartTest: "Restart Test",
    trackDescriptions: {
      frontend: "You enjoy building user interfaces, working with design, and creating interactive experiences.",
      backend: "You prefer working with servers, databases, APIs, and system architecture.",
      balanced: "You have balanced interests across the full development stack - frontend and backend appeal to you equally."
    },
    trackLabels: {
      frontend: "🎨 Frontend Development",
      backend: "⚙️ Backend Development",
      balanced: "🔄 Full-Stack Development"
    }
  },
  layout: {
    footer: "© 2024 DevPersona. Built with React & TypeScript"
  },
  personalities: {
    analytical: {
      name: "Analytical Thinker",
      description: "Loves solving complex problems, data-driven decision making",
      recommendation: `You thrive on logic, critical thinking, and solving complex problems. Your analytical mindset makes you a natural fit for roles that require deep technical expertise and attention to detail. You excel at breaking down large challenges into manageable pieces and enjoy optimizing systems for performance and reliability.

Ideal roles: Backend Developer, Data Engineer, Algorithm Specialist, DevOps Engineer
Recommended technologies: Python, Go, SQL, cloud platforms (AWS, Azure, GCP)
Work environment: You perform best in structured teams where you can focus on technical challenges and collaborate with other experts.

Keep pushing your boundaries by tackling new algorithms, contributing to open-source projects, or exploring advanced topics like machine learning or distributed systems.`
    },
    creative: {
      name: "Creative Innovator",
      description: "Thinks outside the box, values innovation and design",
      recommendation: `Your creativity and passion for innovation set you apart. You love designing beautiful, intuitive user experiences and thinking outside the box to solve problems. You're drawn to projects where you can express your ideas visually and experiment with new technologies.

Ideal roles: Frontend Developer, UI/UX Designer, Creative Technologist, Animation Engineer
Recommended technologies: React, Figma, CSS-in-JS, Three.js, WebGL
Work environment: You shine in collaborative, open-minded teams that value experimentation and design thinking.

Consider building a portfolio of creative projects, learning about design systems, or exploring interactive media and creative coding communities.`
    },
    systematic: {
      name: "Systematic Organizer",
      description: "Methodical approach, loves structure and processes",
      recommendation: `You are highly organized, methodical, and value structure in your work. You excel at creating efficient workflows, maintaining documentation, and ensuring that projects run smoothly from start to finish. Your attention to process and detail helps teams deliver high-quality software on time.

Ideal roles: Project Manager, QA Engineer, Systems Architect, Scrum Master
Recommended technologies: Jira, Confluence, TypeScript, CI/CD tools
Work environment: You thrive in environments with clear processes, well-defined goals, and opportunities to optimize team performance.

Explore certifications in project management (like Scrum or Kanban), contribute to process improvement initiatives, or mentor others in best practices.`
    },
    collaborative: {
      name: "Collaborative Team Player",
      description: "Thrives in team environments, great communicator",
      recommendation: `You are a natural team player and communicator. You enjoy working closely with others, sharing knowledge, and building consensus. Your empathy and leadership skills make you a valuable asset in any team, especially in roles that require cross-functional collaboration.

Ideal roles: Developer Advocate, Team Lead, Agile Coach, Full-Stack Developer
Recommended technologies: Slack, GitHub, Node.js, REST APIs
Work environment: You excel in dynamic, people-focused teams where open communication and shared goals are prioritized.

Consider leading team meetings, organizing knowledge-sharing sessions, or getting involved in developer communities and events to expand your impact.`
    }
  },
  questions: [
    {
      text: "When starting a new coding project, what's your first instinct?",
      options: [
        "Research best practices and architectural patterns",
        "Sketch out creative UI concepts and user flows",
        "Set up project structure and development workflow",
        "Discuss requirements with team members"
      ]
    },
    {
      text: "Your favorite type of coding challenge is:",
      options: [
        "Algorithm optimization and performance tuning",
        "Building interactive user interfaces",
        "Database design and system architecture",
        "Code reviews and pair programming sessions"
      ]
    },
    {
      text: "When debugging a complex issue, you typically:",
      options: [
        "Analyze logs and use debugging tools systematically",
        "Try creative solutions and experiment with fixes",
        "Follow a methodical step-by-step process",
        "Ask teammates for their insights and perspectives"
      ]
    },
    {
      text: "How do you prefer to learn a new technology?",
      options: [
        "Read documentation and analyze examples",
        "Experiment and build something creative",
        "Follow a structured online course",
        "Join a study group or ask colleagues"
      ]
    },
    {
      text: "What motivates you most in a development project?",
      options: [
        "Solving challenging technical problems",
        "Creating beautiful and unique user experiences",
        "Organizing tasks and optimizing workflow",
        "Collaborating and sharing knowledge"
      ]
    },
    {
      text: "How do you handle tight deadlines?",
      options: [
        "Prioritize tasks based on impact and data",
        "Find creative shortcuts and solutions",
        "Create a detailed plan and checklist",
        "Coordinate with the team to divide work"
      ]
    },
    {
      text: "Which part of a software project do you enjoy most?",
      options: [
        "Architecting the system and logic",
        "Designing the UI and animations",
        "Setting up processes and documentation",
        "Facilitating meetings and team syncs"
      ]
    },
    {
      text: "How do you approach code reviews?",
      options: [
        "Focus on logic and potential bugs",
        "Suggest creative improvements",
        "Check for consistency and standards",
        "Encourage open discussion and feedback"
      ]
    },
    {
      text: "Which task excites you the most?",
      options: [
        "Optimizing database queries for speed",
        "Designing a visually stunning landing page",
        "Automating deployment pipelines",
        "Creating interactive UI animations"
      ]
    },
    {
      text: "What do you enjoy learning about more?",
      options: [
        "Server-side frameworks and APIs",
        "CSS, design systems, and accessibility",
        "Cloud infrastructure and scaling",
        "Modern JavaScript frameworks (React, Vue, etc.)"
      ]
    }
  ]
};

// French translations
const fr: TranslationData = {
  hero: {
    title: "Personnalité de Développeur",
    subtitle: "Découvrez Votre",
    description: "Passez notre évaluation de personnalité scientifiquement conçue pour découvrir votre pile technologique idéale, votre parcours professionnel et votre environnement de travail. Obtenez des insights personnalisés en quelques minutes.",
    ctaButton: "Commencer Votre Évaluation"
  },
  features: {
    title: "Pourquoi Passer Ce Test ?",
    items: [
      {
        title: "Insights Carrière Personnalisés",
        description: "Obtenez des recommandations sur mesure pour vos rôles de développement idéaux et votre pile technologique basées sur votre personnalité."
      },
      {
        title: "Rapide et Scientifique",
        description: "Complétez l'évaluation en moins de 5 minutes avec des questions conçues par des experts de l'industrie."
      },
      {
        title: "Résultats Partageables",
        description: "Partagez votre personnalité de développeur avec votre réseau et montrez votre conscience de soi aux employeurs potentiels."
      }
    ]
  },
  stats: {
    items: [
      { value: "25K+", label: "Développeurs Profilés" },
      { value: "98%", label: "Satisfaction Personnalisation" },
      { value: "4.9★", label: "Note Utilisateur" },
      { value: "120+", label: "Pays Atteints" }
    ]
  },
  test: {
    title: "Question",
    questionCounter: "sur",
    backToHome: "Retour à l'Accueil",
    progressComplete: "Terminé"
  },
  results: {
    title: "Votre Personnalité de Développeur",
    dominantType: "Type Dominant :",
    developmentTrack: "Voie de Développement",
    youLeanToward: "Vous tendez vers :",
    scores: "Vos Scores :",
    recommendation: "Recommandation",
    shareTwitter: "Partager sur Twitter",
    shareLinkedIn: "Partager sur LinkedIn",
    copyResult: "Copier le Résultat",
    restartTest: "Recommencer le Test",
    trackDescriptions: {
      frontend: "Vous aimez créer des interfaces utilisateur, travailler avec le design et créer des expériences interactives.",
      backend: "Vous préférez travailler avec les serveurs, les bases de données, les API et l'architecture système.",
      balanced: "Vous avez des intérêts équilibrés sur toute la pile de développement - le frontend et le backend vous attirent également."
    },
    trackLabels: {
      frontend: "🎨 Développement Frontend",
      backend: "⚙️ Développement Backend",
      balanced: "🔄 Développement Full-Stack"
    }
  },
  layout: {
    footer: "© 2024 DevPersona. Construit avec React & TypeScript"
  },
  personalities: {
    analytical: {
      name: "Penseur Analytique",
      description: "Aime résoudre des problèmes complexes, prise de décision basée sur les données",
      recommendation: `Vous excellez dans la logique, la pensée critique et la résolution de problèmes complexes. Votre mentalité analytique vous rend naturellement adapté aux rôles qui nécessitent une expertise technique approfondie et une attention aux détails. Vous excellez à décomposer de grands défis en éléments gérables et aimez optimiser les systèmes pour la performance et la fiabilité.

Rôles idéaux : Développeur Backend, Ingénieur de Données, Spécialiste d'Algorithmes, Ingénieur DevOps
Technologies recommandées : Python, Go, SQL, plateformes cloud (AWS, Azure, GCP)
Environnement de travail : Vous performez le mieux dans des équipes structurées où vous pouvez vous concentrer sur les défis techniques et collaborer avec d'autres experts.

Continuez à repousser vos limites en vous attaquant à de nouveaux algorithmes, en contribuant à des projets open source, ou en explorant des sujets avancés comme l'apprentissage automatique ou les systèmes distribués.`
    },
    creative: {
      name: "Innovateur Créatif",
      description: "Pense en dehors des sentiers battus, valorise l'innovation et le design",
      recommendation: `Votre créativité et votre passion pour l'innovation vous distinguent. Vous aimez concevoir de belles expériences utilisateur intuitives et penser en dehors des sentiers battus pour résoudre les problèmes. Vous êtes attiré par les projets où vous pouvez exprimer vos idées visuellement et expérimenter avec de nouvelles technologies.

Rôles idéaux : Développeur Frontend, Designer UI/UX, Technologue Créatif, Ingénieur d'Animation
Technologies recommandées : React, Figma, CSS-in-JS, Three.js, WebGL
Environnement de travail : Vous brillez dans des équipes collaboratives et ouvertes d'esprit qui valorisent l'expérimentation et la pensée design.

Considérez créer un portfolio de projets créatifs, apprendre les systèmes de design, ou explorer les communautés de médias interactifs et de codage créatif.`
    },
    systematic: {
      name: "Organisateur Systématique",
      description: "Approche méthodique, aime la structure et les processus",
      recommendation: `Vous êtes très organisé, méthodique et valorisez la structure dans votre travail. Vous excellez à créer des flux de travail efficaces, maintenir la documentation et vous assurer que les projets se déroulent sans heurts du début à la fin. Votre attention aux processus et aux détails aide les équipes à livrer des logiciels de haute qualité dans les délais.

Rôles idéaux : Chef de Projet, Ingénieur QA, Architecte Systèmes, Scrum Master
Technologies recommandées : Jira, Confluence, TypeScript, outils CI/CD
Environnement de travail : Vous prospérez dans des environnements avec des processus clairs, des objectifs bien définis et des opportunités d'optimiser la performance d'équipe.

Explorez les certifications en gestion de projet (comme Scrum ou Kanban), contribuez aux initiatives d'amélioration des processus, ou mentorez d'autres dans les meilleures pratiques.`
    },
    collaborative: {
      name: "Joueur d'Équipe Collaboratif",
      description: "Prospère dans les environnements d'équipe, excellent communicateur",
      recommendation: `Vous êtes un joueur d'équipe naturel et un communicateur. Vous aimez travailler étroitement avec les autres, partager les connaissances et construire un consensus. Vos compétences en empathie et leadership font de vous un atout précieux dans toute équipe, en particulier dans des rôles nécessitant une collaboration inter-fonctionnelle.

Rôles idéaux : Avocat Développeur, Chef d'Équipe, Coach Agile, Développeur Full-Stack
Technologies recommandées : Slack, GitHub, Node.js, APIs REST
Environnement de travail : Vous excellez dans des équipes dynamiques centrées sur les personnes où la communication ouverte et les objectifs partagés sont prioritaires.

Considérez diriger des réunions d'équipe, organiser des sessions de partage de connaissances, ou vous impliquer dans les communautés et événements de développeurs pour étendre votre impact.`
    }
  },
  questions: [
    {
      text: "Quand vous commencez un nouveau projet de codage, quel est votre premier réflexe ?",
      options: [
        "Rechercher les meilleures pratiques et les modèles architecturaux",
        "Esquisser des concepts UI créatifs et des flux utilisateur",
        "Configurer la structure du projet et le flux de développement",
        "Discuter des exigences avec les membres de l'équipe"
      ]
    },
    {
      text: "Votre type de défi de codage préféré est :",
      options: [
        "Optimisation d'algorithmes et réglage de performance",
        "Construire des interfaces utilisateur interactives",
        "Conception de base de données et architecture système",
        "Révisions de code et sessions de programmation en binôme"
      ]
    },
    {
      text: "Lors du débogage d'un problème complexe, vous typiquement :",
      options: [
        "Analysez les logs et utilisez les outils de débogage systématiquement",
        "Essayez des solutions créatives et expérimentez avec des corrections",
        "Suivez un processus méthodique étape par étape",
        "Demandez des insights et perspectives à vos coéquipiers"
      ]
    },
    {
      text: "Comment préférez-vous apprendre une nouvelle technologie ?",
      options: [
        "Lire la documentation et analyser des exemples",
        "Expérimenter et construire quelque chose de créatif",
        "Suivre un cours en ligne structuré",
        "Rejoindre un groupe d'étude ou demander aux collègues"
      ]
    },
    {
      text: "Qu'est-ce qui vous motive le plus dans un projet de développement ?",
      options: [
        "Résoudre des problèmes techniques difficiles",
        "Créer des expériences utilisateur belles et uniques",
        "Organiser les tâches et optimiser le flux de travail",
        "Collaborer et partager les connaissances"
      ]
    },
    {
      text: "Comment gérez-vous les délais serrés ?",
      options: [
        "Prioriser les tâches basées sur l'impact et les données",
        "Trouver des raccourcis créatifs et des solutions",
        "Créer un plan détaillé et une liste de vérification",
        "Coordonner avec l'équipe pour diviser le travail"
      ]
    },
    {
      text: "Quelle partie d'un projet logiciel appréciez-vous le plus ?",
      options: [
        "Architecturer le système et la logique",
        "Concevoir l'UI et les animations",
        "Configurer les processus et la documentation",
        "Faciliter les réunions et les syncs d'équipe"
      ]
    },
    {
      text: "Comment abordez-vous les révisions de code ?",
      options: [
        "Se concentrer sur la logique et les bugs potentiels",
        "Suggérer des améliorations créatives",
        "Vérifier la cohérence et les standards",
        "Encourager la discussion ouverte et les retours"
      ]
    },
    {
      text: "Quelle tâche vous excite le plus ?",
      options: [
        "Optimiser les requêtes de base de données pour la vitesse",
        "Concevoir une page d'accueil visuellement époustouflante",
        "Automatiser les pipelines de déploiement",
        "Créer des animations UI interactives"
      ]
    },
    {
      text: "Qu'aimez-vous apprendre davantage ?",
      options: [
        "Frameworks côté serveur et APIs",
        "CSS, systèmes de design et accessibilité",
        "Infrastructure cloud et mise à l'échelle",
        "Frameworks JavaScript modernes (React, Vue, etc.)"
      ]
    }
  ]
};

// Export translations object
export const translations: Record<Language, TranslationData> = {
  en,
  fr
}; 