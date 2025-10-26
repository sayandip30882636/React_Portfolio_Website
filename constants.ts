
import type { Project, BlogPost } from './types';

export const SKILLS: string[] = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Gemini API', 'UI/UX Design','Python','GenAI','NLP'];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SayandipGPT-AI-powered-chatbot-for-Discord. ',
    description: 'SayandipGPT is an AI-powered chatbot for Discord, built using Google Gemini 1.5 Flash model. It enables real-time, intelligent conversations within any Discord server. Developed and deployed on Replit, this bot is fast, easy to maintain, and cloud-hosted.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Discord', 'Os', 'Genai', 'Asyncio', 'Public API', 'Python'],
    githubUrl: 'https://github.com/sayandip30882636/SayandipGPT-AI-powered-chatbot-for-Discord.',
  },
  {
    id: 2,
    title: 'PaperScout-Topic-Aware-Academic-Paper-Recommender',
    description: 'A Streamlit app for academic paper discovery that performs multi-source searches and ranks results using Sentence-Transformers and Faiss. It offers trend analysis and export functionality with multiple citation formats, including IEEE, APA, and BibTeX.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['Python', 'NLP', 'SQLite', 'APIs', 'Streamlit' ,'BERT'],
    githubUrl: 'https://github.com/sayandip30882636/PaperScout-Topic-Aware-Academic-Paper-Recommender',
  },
  {
    id: 3,
    title: 'Automated-Resume-Screening-System-and-Job-recommdation-System',
    description: 'The Automated Resume Screening and Job Recommendation System is an AI-powered web-based platform developed to streamline and modernize the recruitment process for both employers and job seekers. The system automates the tedious task of manual resume screening and enhances job matching through intelligent, data-driven techniques.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Python', 'Machine Learning', 'NLP', 'Streamlit'],
    githubUrl: 'https://github.com/sayandip30882636/Automated-Resume-Screening-System-and-Job-recommdation-System',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Mastering React Hooks in 2024',
    date: 'October 26, 2023',
    excerpt: 'A deep dive into the most powerful React Hooks and how to use them effectively to build clean, maintainable, and performant components...',
    content: 'In this post, we explore the evolution of React Hooks, from useState and useEffect to custom hooks. We will cover best practices, common pitfalls, and advanced patterns that will elevate your React development skills. By understanding the core principles behind hooks, you can write more declarative and reusable code.',
  },
  {
    id: 2,
    title: 'Why TypeScript is a Game-Changer for Frontend Development',
    date: 'September 15, 2023',
    excerpt: 'Discover how adopting TypeScript can dramatically improve code quality, reduce bugs, and enhance developer experience in large-scale applications...',
    content: 'TypeScript, a superset of JavaScript, brings static typing to the frontend world. This allows for early bug detection during development, improved code autocompletion, and better maintainability of complex codebases. We\'ll walk through setting up a project with TypeScript and explore key features like interfaces, generics, and enums.',
  },
  {
    id: 3,
    title: 'The Art of API Design: Best Practices',
    date: 'August 01, 2023',
    excerpt: 'Learn the principles of designing robust, scalable, and easy-to-use APIs that your consumers will love. From RESTful conventions to GraphQL...',
    content: 'A well-designed API is crucial for the success of any application. This post covers the fundamentals of API design, including resource naming, HTTP methods, status codes, and error handling. We also touch upon modern approaches like GraphQL and discuss how to document your API effectively to ensure a smooth integration experience for developers.',
  },
];