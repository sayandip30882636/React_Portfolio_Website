
import React, { useState } from 'react';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

// IMPORTANT: Replace this placeholder with your actual Hugging Face API token.
// For security, it's best to store this in an environment variable.
const HUGGING_FACE_API_TOKEN = 'YOUR_HUGGING_FACE_API_TOKEN_HERE';

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSummarize = async () => {
    setIsLoading(true);
    setError(null);
    setSummary(null);

    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUGGING_FACE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputs: post.content }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch summary.');
      }

      const data = await response.json();
      if (data && data.length > 0 && data[0].summary_text) {
        setSummary(data[0].summary_text);
      } else {
        throw new Error('Invalid response format from summarization API.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-slate-200 dark:border-slate-700">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-cyan-600 dark:text-cyan-400">{post.title}</h3>
        <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">{post.date}</p>
        <p className="text-slate-600 dark:text-slate-400">{post.excerpt}</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center">
        <a href="#" className="inline-block text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold">
          Read More &rarr;
        </a>
        <button
          onClick={handleSummarize}
          disabled={isLoading}
          className="ml-auto inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-emerald-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
        >
          {isLoading ? 'Summarizing...' : 'AI Summarize'}
        </button>
      </div>
      
      {error && <p className="mt-4 text-sm text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/40 p-3 rounded-md">{error}</p>}
      
      {summary && (
        <div className="mt-4 p-4 border-l-4 border-emerald-500 dark:border-emerald-400 bg-slate-100 dark:bg-slate-800/50 rounded-r-lg">
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">AI Summary:</h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm">{summary}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPostCard;